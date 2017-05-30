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
  .catch((err) => {
    res.status(400).send({error: err.message});
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
    .catch((err) => {
      res.status(400).send({error: err.message});
    });
  } else {
    User.findOne({
      where: {username: req.params.id},
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send({error: err.message});
    });
  }
});

// Get all Users
users.get('/', (req,res) => {
  User.all()
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

users.post('/', (req,res) =>{
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create({
        "username": req.body.username,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "password": hash,
        "address": req.body.address,
        "zipcode": req.body.zipcode,
        "latitude": req.body.latitude,
        "longitude": req.body.longitude,
        "supplier": req.body.supplier
      })
      .then(res.json.bind(res))
      .catch((err) => {
        res.status(400).send({error: err.message});
      });
    });
  });
});

users.put('/:id', (req, res)=> {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.update(
      {
        "username": req.body.username,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "password": hash,
        "address": req.body.address,
        "zipcode": req.body.zipcode,
        "supplier": req.body.supplier
      },{
        where: {'id': req.params.id}
      })
      .then(res.json.bind(res))
      .catch((err) => {
        res.status(400).send({error: err.message});
      });
    });
  });
});

users.delete('/:id', (req,res) =>{
  User.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = users;