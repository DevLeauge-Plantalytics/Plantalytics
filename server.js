/*jshint esversion:6*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('./models');
const fs = require('fs');

const methodOverride = require('method-override');

app.use( bodyParser.json() );

app.use(express.static('./public') );

app.use('/api', require('./api'));

//db.sequelize.sync({force:true});

app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});