/*jshint esversion: 6*/
const express = require('express');
const location = express.Router();

location.route('/:address/analysis')
  .get((req, res) => {
  })
  .post((req, res) => {
  });

location.route('/new')
  .get((req, res) => {
  });

location.get('', (req, res) => {
});

module.exports = location;