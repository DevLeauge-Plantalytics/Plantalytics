/*jshint esversion:6*/

const express = require('express');
const users = express.Router();
const {User} = require('../../models');
//const db = require('../../models');
//const User = db.User;

//password hashing
const saltRounds = 10;
const bcrypt = require('bcrypt');

// Get all Users
users.get('/', (req,res) => {
  User.all()
    .then((users) => {
      res.json(users);
    });
});

// New User
users.post('/new', (req,res) =>{
  console.log(req.body);
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create(req.body)
        .then(res.json.bind(res))
        .catch(res.json.bind(res));
    });
  });
});

// Users by :id
users.get('/:id', (req,res) => {
  if(!isNaN(parseInt(req.params.id))){
    User.findOne({
      where: {id: req.params.id}
    })
    //User.findById
      .then((user) => {
        res.json(user);
      })
      .catch(console.log);
  } else {
    User.findOne({
      where: {username: req.params.id},
    })
    //User.findById
      .then((user) => {
        res.json(user);
      })
      .catch(console.log);
  }
});
// Edit User
users.put('/:id', (req, res)=> {
  if(!isNaN(parseInt(req.params.id))){
    User.findOne({
      where: {id: req.params.id}
    })
    //User.findById
      .then((user) => {
        res.json(user);
      })
      .catch(console.log);
  } else {
    User.findOne({
      where: {username: req.params.id},
    })
    //User.findById
      .then((user) => {
        res.json(user);
      })
      .catch(console.log);
    }
});
// Delete User
users.delete('/:id', (req,res) =>{
  User.destroy({where: {"username": req.params.username}})
  .then(res.json.bind(res))
  .catch(error => {
    console.log(error);
  });
});

//Users by :id/loction/:address
  // will use get and return users id: with locations table and call and an address
users.get('/:id/location/:address', (req,res) => {
  User.all({where: {id: req.params.id}})
    .then((users) => {
      res.json(users);
    });
});

//Users by :id/location/all
  // will use get and return
users.get(':id/location/all', (req,res) => {

});

//Users by Suppliers
  // will use get and return all users whey type === suppliers
users.get(':id/location/all', (req,res) => {

});


//Users by Suppliers/ by product
  // return all user where type == suppliers
  // and wehre all products === :poru
users.get(':id/location/all', (req,res) => {

});


module.exports = users;