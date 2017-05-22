/*jshint esversion: 6*/
const express = require('express');
const users = express.Router();



users.route('/new')
  .get((req, res) => {

  });

users.route('/:id/edit')
  .get((req, res) => {

  })
  .post((req, res) => {

  });

users.get('/:id/saved-locations', (req, res) => {
});

 module.exports = users;