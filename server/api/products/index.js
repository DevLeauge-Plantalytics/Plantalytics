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
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

products.get('/requests', (req,res) => {
  if(req.query.id1 === undefined || req.query.id2 === undefined ){
    res.send(400, "must have valid query id1 and id2");
  } else {
    Product.findAll({
        include: [
          {
            model:User,
            as:'Owner',
            where: {id: {$in:[Number(req.query.id1), Number(req.query.id2)] }},
          }
        ],
      where: {quantity:{$gt: 0}}
    })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(400).send({error: err.message});
    });
  }
});

products.get('/', (req,res) => {
  Product.all()
  .then((users) => {
    res.json(products);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
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
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

products.post('/', (req,res) =>{
  Product.create(req.body)
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

products.delete('/:id', (req,res) =>{
  Product.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = products;