var express = require("express");
var exphbs = require("express-handlebars");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3001 ,
  user     : 'root',
  password : 'Nightlyassassinx123!@#'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("listening on: " + PORT)
})