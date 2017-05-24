/*jshint esversion:6*/

const express = require('express');
const users = express.Router();
const {User} = require('../../models');

//password hashing
const saltRounds = 10;
const bcrypt = require('bcrypt');

users.get('/suppliers', (req,res) => {
  User.findAll({
    where: {supplier: true},
  })
  .then((users) => {
      res.json(users);
  })
  .catch(err => {
    console.log(err);
  });
});

// Get User by :id -- this will be called by the Login form / or Account/Edit button on Dashboard page
users.get('/:id', (req,res) => {
  if(!isNaN(parseInt(req.params.id))){
    User.findOne({
      where: {id: req.params.id}
    })
    .then((user) => {
      res.json(user);
    })
    .catch(console.log);
  } else {
    User.findOne({
      where: {username: req.params.id},
    })
    .then((user) => {
      res.json(user);
    })
    .catch(console.log);
  }
});

// Get all Users
users.get('/', (req,res) => {
  User.all()
    .then((users) => {
      res.json(users);
    });
});

users.post('/', (req,res) =>{
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create(req.body)
        .then(res.json.bind(res))
        .catch(res.json.bind(res));
    });
  });
});

users.put('/:id', (req, res)=> {
  console.log(req.body);
  User.update(req.body,
    {where: {'id': req.params.id}}
    )
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

users.delete('/:id', (req,res) =>{
  User.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch(error => {console.log(error);});
});

module.exports = users;