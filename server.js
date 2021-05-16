var express = require("express");
var exphbs = require("express-handlebars");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3306 ,
  user     : 'root',
  password : 'Nightlyassassinx123!@#',
  database : 'HeroesAndLegends'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM announcements', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });


var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/htmlRoutes.js")(app);

// Access the parse results as request.body
app.post('/nomination_category', function(request, response){
    console.log(request);
});


app.listen(PORT, function(){
    console.log("listening on: " + PORT)
})