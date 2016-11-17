var expression = require("express");
var router = expression.Router();
console.log("test3");
router.route("/")
.get(function(req, res){
     res.send('<h1>poll page</h2>');
})
.get(function(req, res){
     res.send('<h1>poll 2 page</h2>');
})
.post(function(req, res){
     res.send('<h1>poll 3 page</h2>');
});
/*.get("/poll1", function(req, res){
     res.send('<h1>poll 1 page</h2>');
})
.get("/poll2", function(req, res){
     res.send('<h1>poll 2 page</h2>');
})
.post("/poll3", function(req, res){
     res.send('<h1>poll 3 page</h2>');
});*/

module.exports = router;

