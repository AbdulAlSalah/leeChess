



//const { Status } = require("./statuses.js");

//let clickSound = new Audio("../data/click.wav");

/* constructor of game state */
function GameState(sb, socket) {
  this.board = Chess();
  this.playerType = null;
  this.statusBar = sb;

  this.getPlayerType = function () {
    return this.playerType;
  };

  this.setPlayerType = function (p) {
    this.playerType = p;
  };

  this.whoWon = function () {
    //too many wrong guesses? Player A (who set the word) won
    if (this.board.in_checkmate) {
      if (this.playerType == "WHITE") {
        return "BLACK";
      }
      else {
        return "WHITE";
      }
    }
    //word solved? Player B won
    return null; //nobody won yet
  };

  this.updateGame = function (move_start, move_end) {

    this.board.move({from: move_start, to: move_end});

    

    var outgoingMsg = Messages.O_MAKE_MOVE;
    outgoingMsg.data = {move_start, move_end};
    socket.send(JSON.stringify(outgoingMsg));

    //is the game complete?
    let winner = this.whoWon();

    if (winner != null) {

      /* disable further clicks by cloning each alphabet
       * letter and not adding an event listener; then
       * replace the original node through some DOM logic
       */
      let elements = document.querySelectorAll(".letter");
      Array.from(elements).forEach(function (el) {
       // el.style.pointerEvents = "none";
      });

      let alertString;
      if (winner == this.playerType) {
        alertString = Status["gameWon"];
      } else {
        alertString = Status["gameLost"];
      }
      alertString += Status["playAgain"];
      sb.setStatus(alertString);

      let finalMsg = Messages.O_GAME_WON_BY;
      finalMsg.data = this.getPlayerType;
      socket.close();
    }
  };
}

//CHANGE THIS TO CREATE AN INTERACTIVE CHESSBOARD
function ChessBoard(gs) {
  //only initialize for player that should actually be able to use the board
  this.initialize = function () {
    var elements = document.querySelectorAll(".tile");
    Array.from(elements).forEach(function (el) {
      el.addEventListener("click", function singleClick(e) {
        var move = e.target;
        //var move = e.target.id; ???
        return move;
      });
    });
  };
}

//CHANGE THIS TO SET EVERYTHING UP ACCORDINGLY
//set everything up, including the WebSocket
(function setup() {
  var socket = new WebSocket(Setup.WEB_SOCKET_URL);

  /*
   * initialize all UI elements of the game:
   * - visible word board (i.e. place where the hidden/unhidden word is shown)
   * - status bar
   * - alphabet board
   *
   * the GameState object coordinates everything
   */

  var vw = new VisibleWordBoard();
  var sb = new StatusBar();

  var gs = new GameState(sb, socket);
  var ab = new ChessBoard(gs);

  socket.onmessage = function (event) {
    let incomingMsg = JSON.parse(event.data);

    //set player type
    if (incomingMsg.type == Messages.T_PLAYER_TYPE) {
      gs.setPlayerType(incomingMsg.data); //should be "white" or "black"

      //if player type is A, (1) pick a word, and (2) sent it to the server
    }

    //Player B: wait for target word and then start guessing ...
    if (
      incomingMsg.type == Messages.T_MAKE_MOVE
    ) {
      gs.updateGame(incomingMsg.data[0], incomingMsg.data[1]);

      sb.setStatus(Status["player2Intro"]);
      //gs.initializeVisibleWordArray(); // initialize the word array, now that we have the word
      ab.initialize();
      //vw.setWord(gs.getVisibleWordArray());
    }

    //Player A: wait for guesses and update the board ...
    if (
      incomingMsg.type == Messages.T_MAKE_MOVE &&
      gs.getPlayerType() == "A"
    ) {
      sb.setStatus(Status["guessed"] + incomingMsg.data);
      gs.updateGame(incomingMsg.data);
    }
  };

  socket.onopen = function () {
    socket.send("{}");
  };

  //server sends a close event only if the game was aborted from some side
  socket.onclose = function () {
    if (gs.whoWon() == null) {
      sb.setStatus(Status["aborted"]);
    }
  };

  socket.onerror = function () { };
})(); //execute immediately