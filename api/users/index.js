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
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create(req.body)
        .then(res.json.bind(res))
        .catch(res.json.bind(res));
    });
  });
});

// Users by :id -- this will be called by the Login form
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
// Edit User -- this will come from the form on Profile page
users.put('/:id', (req, res)=> {
  User.update(req.body,
    {where: {'id': req.params.id}}
    )
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});
// Delete User
users.delete('/:id', (req,res) =>{
  User.destroy({where: {"username": req.params.username}})
  .then(res.json.bind(res))
  .catch(error => {
    console.log(error);
  });
});

//Users by :id/ --> location/all
users.get('/:id', (req,res) => {
  User.all({where: {id: req.params.id}})
    .then((users) => {
      res.json(users);
      // join the user table to location table
      // render all :addresses on the location table
    });
});

//Users by :id/ --> location/:address
users.get(':id/location/all', (req,res) => {
  User.all({where: {id: req.params.id}})
    .then((users) => {
      res.json(users);
      // join the user table to location table
      // render all :addresses on the location table
    });

});

//Users by Suppliers
users.get('/suppliers', (req,res) => {
  User.all({where: {id: req.params.supplier}})
    .then((users) => {
      res.json(users);
      // join the user table to products table
      // render all all users and products
    });

});

//Users by Suppliers/ by product
users.get('suppliers/:product', (req,res) => {
  User.all({where: {id: req.params.supplier}})
    .then((users) => {
      res.json(users);
      // join the user table to products table
      // render all all users and products
      // where products == :products
    });

});


module.exports = users;