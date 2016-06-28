//initial setup for express
var express = require('express');
var app = express();

app.disable('x-powered-by');


//seting up handle bars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

//seting server port
app.set('port', process.env.PORT || 3000);

//setting up static folder for images
app.use(express.static(__dirname + '/public'));



//index/homepage
app.get('/', function (req, res) {
  res.render('home');
});



//about landing page
app.get('/about',function(req,res){
  res.render('about');
});



//Contact us Landing page
app.get('/apply',function(req,res){
  res.render('apply');
});


//404 Error Page not found Landing site
app.use(function(req,res){
  res.type('text/html');
  res.status(404);
  res.render('404');
});



//500 Error Server error landing site
app.use(function(req,res,err,next){
  console.log(err.stack);
  res.status(404);
  res.render('404');
});



// listen for other urls
app.listen(app.get('port'), function () {
  console.log('app listening on port 3000!');
  console.log('Ctrl + C to exit the server');
});
