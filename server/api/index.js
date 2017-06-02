/*jshint esversion:6*/

const express = require('express');
const Router = express.Router();

Router.use('/users', require('./users'));
Router.use('/products', require('./products'));
Router.use('/requests', require('./requests'));
Router.use('/messages', require('./messages'));
Router.use('/posts', require('./posts'));
Router.use('/locations', require('./locations'));
Router.use('/quotations', require('./quotations'));
Router.use('/D3', require('./D3'));
Router.use('/req_prod_requesteds', require('./req_prod_requesteds'));
Router.use('/req_prod_offereds', require('./req_prod_offereds'));

module.exports = Router;