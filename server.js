/*jshint esversion: 6*/
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const locationRoute = require('./routes/articles.js');
const userRoute = require('./routes/articles.js');
const suppliersRoute = require('./routes/products.js');
const messagesRoute = require('./routes/products.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(analyticsLog);

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(analyticsLog);

app.use(express.static('public'));
app.use('/articles', articlesRoute);
app.use('/products', productsRoute);
app.get('/',(req, res) => {
  res.render('home');
});

app.get('*', function(req, res){
  res.render('error404');
});

const server = app.listen(PORT);