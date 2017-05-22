/*jshint esversion: 6*/
const express = require('express');
const messages = express.Router();

messages.route('/')
  .get((req, res) => {
  })
  .post((req, res) => {
  });

messages.route('/new')
  .get((req, res) => {
  });

messages.get('/edit', (req, res) => {
});

  module.exports = messages;