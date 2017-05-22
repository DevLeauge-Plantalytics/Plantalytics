/*jshint esversion: 6*/
const express = require('express');
const suppliers = express.Router();

suppliers.route('/')
  .get((req, res) => {
  })
  .post((req, res) => {
  });

suppliers.route('/new')
  .get((req, res) => {
  });

suppliers.get('/:title/edit', (req, res) => {
});

  module.exports = suppliers;