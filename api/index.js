/*jshint esversion:6*/

const express = require('express');
const Router = express.Router();

Router.use('/users', require('./users'));
Router.use('/products', require('./products'));
Router.use('/requests', require('./requests'));
Router.use('/messages', require('./messages'));
Router.use('/posts', require('./posts'));


module.exports = Router;