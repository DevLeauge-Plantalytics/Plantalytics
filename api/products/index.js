/*jshint esversion:6*/

const express = require('express');
const products = express.Router();
const {Product, User} = require('../../models');

products.get('/suppliers', (req,res) => {
  Product.findAll({
    include:[
      {
        model:User,
        as:'Owner',
        where: {supplier: true}
      }
    ],
    where: {quantity:{$gt: 0}}
  })
  .then((products) => {
    res.json(products);
  })
  .catch(res.json.bind(res));
});

products.get('/', (req,res) => {
  Product.all()
    .then((users) => {
      res.json(products);
    });
});

products.get('/:id', (req,res) => {
  Product.findAll({
    include: [
      {
        model:User,
        as:'Owner',
        where: {id: req.params.id},
      }
    ],
  })
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
});

products.post('/', (req,res) =>{
  Product.create(req.body)
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

products.delete('/:id', (req,res) =>{
  Product.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch(error => {
    console.log(error);
  });
});

module.exports = products;