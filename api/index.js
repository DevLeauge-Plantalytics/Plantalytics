/*jshint esversion:6*/

const express = require('express');
const Router = express.Router();

Router.use('/users', require('./users'));
Router.use('/products', require('./products'));
Router.use('/requests', require('./requests'));
Router.use('/reqprods', require('./reqprods'));

module.exports = Router;