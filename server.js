var express = require("express");
var exphbs = require("express-handlebars");
var mysql  = require('mysql');
const nodemailer = require("nodemailer");

var connection = mysql.createConnection({
  host     : 'ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
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

// app.get('/', function (req, res) {

//   connection.query('SELECT * FROM blogs_writings ORDER BY blogs_writings.article_date_created DESC', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results[0]);
//     res.render("blogs_writings", {
//       all_results: results
//     });
//   });

// });


app.post('/blogs_hold', function (req, res) {

  connection.query('SELECT * FROM blogs_writings ORDER BY blogs_writings.article_date_created DESC', function (error, results, fields) {
    if (error) throw error;
    console.log(results[0]);
    res.render("blogs_writings", {
      all_results: results
    });
  });

});


app.post('/nomination_hold', function (req, res) {

  const name = req.body.category
  connection.query('SELECT category_name FROM nomination_categories WHERE id = ' + name, function (error, results, fields) {
    if (error) throw error;
    let category_name = results[0].category_name;  
    console.log(category_name);
    res.render("nomination_category", {
      category: category_name
    });
  });

});

app.post('/prizes_hold', function (req, res) {

  const name = req.body.category
  connection.query('SELECT category_name FROM nomination_categories WHERE id = ' + name, function (error, results, fields) {
    if (error) throw error;
    let category_name = results[0].category_name;  
    console.log(category_name);
    res.render("prizes_and_honorees", {
      category: category_name
    });
  });

});

app.post('/contact_form', function (req, res) {

  const name = req.body.contact_name
  const email_address = req.body.contact_email
  const subject = req.body.contact_subject
  const message = req.body.contact_message

  if(name == '' || email_address == '' || subject == '' || message == ''){
    console.log(name);
    console.log(email_address);
    console.log(subject);
    console.log(message);
    res.render("contact_form", { data: { name: name, email_address: email_address, subject: subject, message: message, incomplete: 'incomplete'} })
  } else {
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thetomatoman99@gmail.com',
          pass: 'tomatokki1!' // naturally, replace both with your real credentials or an application-specific password
        }
      });
    
      const mailOptions = {
        from: 'thetomatoman99@gmail.com',
        to: email_address,
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.render("contact_form", { data: { name: name, email_address: email_address, subject: subject, message: message, complete: 'complete'} })
  }
  


});


app.listen(PORT, function(){
    console.log("listening on: " + PORT)
})