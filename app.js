var express = require("express");
var http = require("http");
var indexRouter = require("./routes/index");
const websocket = require("ws");
var Game = require("./game");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
server = http.createServer(app);

const wss = new websocket.Server({ server });
var messages = require("./public/javascripts/messages");

var websockets = {};



app.get("/", (req, res) => {
  res.sendFile("demo_splash.html", {root: "./public"});
});

app.get("/play", indexRouter);

var gameID = 0;
var currentGame = new Game(gameID);
var connectionID = 0; //each websocket receives a unique ID

wss.on("connection", (ws) => {

    /*
   * two-player game: every two players are added to the same game
   */
  let con = ws;
  con.id = connectionID++;
  let playerType = currentGame.addPlayer(con);
  websockets[con.id] = currentGame;

  console.log(
    "Player %s placed in game %s as %s",
    con.id,
    currentGame.id,
    playerType
  );


  /*
   * inform the client about its assigned player type
   */
  if (playerType == "WHITE") {
    con.send(messages.S_PLAYER_WHITE);
  } else {
    con.send(messages.S_PLAYER_BLACK);  
  }
 
  
  /* once we have two players, there is no way back;
  * a new game object is created;
  * if a player now leaves, the game is aborted (player is not preplaced)
  */
 if (currentGame.hasTwoConnectedPlayers()) {
   currentGame = new Game(gameID++);
 }


 con.on("message",  (message) => {
    //TODO the message sent from the client is porocessed here
    if ((playerType === "WHITE") && (websockets[con.id].playerBlack !== null)) {    
      websockets[con.id].playerBlack.send(message);
      console.log(message + " WHITE");
    } else if (websockets[con.id].playerWhite !== null) {
      websockets[con.id].playerWhite.send(message);
      console.log(message+ " BLACK");
    }
 });





  con.on("close", (code) => {
    /*
    * code 1001 means almost always closing initiated by the client;
    * source: https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    */
    console.log(con.id + " disconnected ...");

    if (code == "1001") {
      /*
      * if possible, abort the game; if not, the game is already completed
      */
      let gameObj = websockets[con.id];

      if (gameObj.isValidTransition(gameObj.gameState, "ABORTED")) {
        gameObj.setStatus("ABORTED");
        //gameStatus.gamesAborted++;

        /*
        * determine whose connection remains open;
        * close it
        */
        try {
          gameObj.playerWhite.close();
          gameObj.playerWhite = null;
        } catch (e) {
          console.log("Player White closing: " + e);
        }

        try {
          gameObj.playerBlack.close();
          gameObj.playerBlack = null;
        } catch (e) {
          console.log("Player Black closing: " + e);
        }
      }
    }
  });
});

//node app.js 3000




server.listen(port);


