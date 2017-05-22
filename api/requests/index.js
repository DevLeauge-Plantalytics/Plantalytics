/*jshint esversion:6*/

const express = require('express');
const requests = express.Router();
const {Request, Product, Req_Prod} = require('../../models');

requests.get('/', (req,res) => {
  Request.all({
    include: [
      {
        model:User,
        as:"Purchaser"
      },
      {
        model:User,
        as:"Vendor"
      }
    ],
    order: [['createdAt','DESC']]
  })
    .then((requests) => {
      res.json(requests);
    });
});

requests.post('/', (req,res) =>{
  Request.create(
    {
      "Buyer": req.body.buyer,
      "Supplier": req.body.supplier,
      // "Products": [1],
    }
  ).then( (request) => {
    return Product.findAll().then( (products) => {
      return request.addProduct(products,{through:Req_Prod});
    });
  })
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

requests.delete('/:id', (req,res) =>{
  Request.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch(error => {
    console.log(error);
  });
});


module.exports = requests;