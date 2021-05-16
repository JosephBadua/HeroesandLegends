var express = require("express");
var exphbs = require("express-handlebars");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
  port     :  3306 ,
  user     : 'hw0ak1n2u9xbrc4p',
  password : 'f4137a8keknru1hx',
  database : 'i09t3zxby93cxf81'

  // host     : 'localhost',
  // port     :  3306 ,
  // user     : 'root',
  // password : 'Nightlyassassinx123!@#',
  // database : 'HeroesAndLegends'
});
 
connection.connect();


var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/htmlRoutes.js")(app);

let category = [];

app.post('/nomination_hold', function (req, res) {
  if(category[0] != ''){
    category.pop();
  }

  const name = req.body.category
  connection.query('SELECT category_name FROM nomination_categories WHERE id = ' + name, function (error, results, fields) {
    if (error) throw error;
    let category_name = results[0].category_name;
    // console.log(category_name);
    category.push(category_name);
    console.log(category);
  });
  

  res.render("nomination_category");
});

app.get('/nomination_hold', (req, res) => {
  res.json(category);
});

app.listen(PORT, function(){
    console.log("listening on: " + PORT)
})