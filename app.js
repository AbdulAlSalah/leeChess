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


var currentGame = new Game(0);
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
  con.send(playerType == "WHITE" ? messages.S_PLAYER_WHITE : messages.S_PLAYER_BLACK);

});






server.listen(port);


