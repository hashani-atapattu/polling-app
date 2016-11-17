var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var http = require("http").Server(app);
var router = express.Router();

router.get("/", function(req, res){
    res.send("<h1>Welcome to Polling App !!!</h1>");
});

app.use(bodyParser.json());
app.use(require("./controllers"));


http.listen(3000, function(){
    console.log("listning on the port 3000");
});


