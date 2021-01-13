/* every game has two players, identified by their WebSocket */
var game = function(gameID) {
    this.playerWhite = null;
    this.playerBlack = null;
    this.id = gameID;
    //this.board = new gameBoard(); //init new game board
    this.gameState = "0_JOINT"; //"WHITE" means white won, "BLACK" means black won, "ABORTED" means the game was aborted
  };
  //TODO create function getBoard() returns the current gameboard


  /*
   * The game can be in a number of different states.
   */
  game.prototype.transitionStates = {};
  game.prototype.transitionStates["0_JOINT"] = 0;
  game.prototype.transitionStates["1_JOINT"] = 1;
  game.prototype.transitionStates["2_JOINT"] = 2;
  game.prototype.transitionStates["WHITE_MOVE"] = 3;
  game.prototype.transitionStates["BLACK_MOVE"] = 4;
  game.prototype.transitionStates["WHITE"] = 5; //A won
  game.prototype.transitionStates["BLACK"] = 6; //B won
  game.prototype.transitionStates["ABORTED"] = 7;
  
  /*
   * Not all game states can be transformed into each other;
   * the matrix contains the valid transitions.
   * They are checked each time a state change is attempted.
   */
  game.prototype.transitionMatrix = [
    [0, 1, 0, 0, 0, 0, 0, 0], //0 JOINT
    [1, 0, 1, 0, 0, 0, 0, 0], //1 JOINT
    [0, 0, 0, 1, 0, 0, 0, 1], //2 JOINT (note: once we have two players, there is no way back!)
    [0, 0, 0, 0, 1, 1, 1, 1], //wHITE Player move
    [0, 0, 0, 1, 0, 1, 1, 1], //BLACK Player move
    [0, 0, 0, 0, 0, 0, 0, 0], //White WON
    [0, 0, 0, 0, 0, 0, 0, 0], //Black WON
    [0, 0, 0, 0, 0, 0, 0, 0] //ABORTED
  ];
  
  game.prototype.isValidTransition = function(from, to) {
    console.assert(
      typeof from == "string",
      "%s: Expecting a string, got a %s",
      arguments.callee.name,
      typeof from
    );
    console.assert(
      typeof to == "string",
      "%s: Expecting a string, got a %s",
      arguments.callee.name,
      typeof to
    );
    console.assert(
      from in game.prototype.transitionStates == true,
      "%s: Expecting %s to be a valid transition state",
      arguments.callee.name,
      from
    );
    console.assert(
      to in game.prototype.transitionStates == true,
      "%s: Expecting %s to be a valid transition state",
      arguments.callee.name,
      to
    );
  
    let i, j;
    if (!(from in game.prototype.transitionStates)) {
      return false;
    } else {
      i = game.prototype.transitionStates[from];
    }
  
    if (!(to in game.prototype.transitionStates)) {
      return false;
    } else {
      j = game.prototype.transitionStates[to];
    }
  
    return game.prototype.transitionMatrix[i][j] > 0;
  };
  
  game.prototype.isValidState = function(s) {
    return s in game.prototype.transitionStates;
  };
  
  game.prototype.setStatus = function(w) {
    console.assert(
      typeof w == "string",
      "%s: Expecting a string, got a %s",
      arguments.callee.name,
      typeof w
    );
  
    if (
      game.prototype.isValidState(w) &&
      game.prototype.isValidTransition(this.gameState, w)
    ) {
      this.gameState = w;
      console.log("[STATUS] %s", this.gameState);
    } else {
      return new Error(
        "Impossible status change from %s to %s",
        this.gameState,
        w
      );
    }
  };
  
  /* TODO get board init function
  *
        game.prototype.setWord = function(w) {
            console.assert(
            typeof w == "string",
            "%s: Expecting a string, got a %s",
            arguments.callee.name,
            typeof w
            );
        
            //two possible options for the current game state:
            //1 JOINT, 2 JOINT
            if (this.gameState != "1_JOINT" && this.gameState != "2_JOINT") {
            return new Error(
                "Trying to set word, but game status is %s",
                this.gameState
            );
            }
            this.wordToGuess = w;
        };
        
  
  game.prototype.getWord = function() {
    return this.wordToGuess;
  };
  */
  
  game.prototype.hasTwoConnectedPlayers = function() {
    return this.gameState == "2_JOINT";
  };
  
  game.prototype.addPlayer = function(p) {
    console.assert(
      p instanceof Object,
      "%s: Expecting an object (WebSocket), got a %s",
      arguments.callee.name,
      typeof p
    );
  
    if (this.gameState != "0_JOINT" && this.gameState != "1_JOINT") {
      return new Error(
        "Invalid call to addPlayer, current state is %s",
        this.gameState
      );
    }
  
    /*
     * revise the game state
     */
  
    var error = this.setStatus("1_JOINT");
    if (error instanceof Error) {
      this.setStatus("2_JOINT");
    }
  
    if (this.playerWhite == null) {
      this.playerWhite = p;
      return "WHITE";
    } else {
      this.playerBlack = p;
      return "BLACK";
    }
  };
  
  module.exports = game;