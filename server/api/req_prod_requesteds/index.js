/*jshint esversion:6*/
const express = require('express');
const req_prod_requesteds = express.Router();
const {Req_Prod_Requested, Product } = require('../../models');

req_prod_requesteds.get('/:id', (req,res) => {
  Req_Prod_Requested.findAll({
    where: {RequestId: req.params.id},
  })
  .then((data) => {
    let products = data.map( x => { return x.ProductId;});
    Product.findAll({
      where: {id: {$in: products }},
    })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(400).send({error: err.message});
    });
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = req_prod_requesteds;