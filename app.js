var express = require("express");
var http = require("http");
var indexRouter = require("./routes/index");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));


app.get("/", indexRouter);

app.get("/", (req, res) => {
  res.sendFile("grumpy.html", {root: "./public"});
});

server = http.createServer(app);
server.listen(port);
