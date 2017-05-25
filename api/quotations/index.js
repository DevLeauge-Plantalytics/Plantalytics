/*jshint esversion:6*/

const express = require('express');
const quotations = express.Router();
const {Quotation, Request, Product, Req_Prod_Requested, Req_Prod_Offered} = require('../../models');

quotations.get('/buyer/:id', (req,res) => {
  Quotation.findAll({
    include:[
      {
        model: Request,
        as:'Contract',
        where: {Buyer: req.params.id}
      }
    ],
  })
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
});

quotations.get('/supplier/:id', (req,res) => {
  Quotation.findAll({
    include:[
      {
        model: Request,
        as:'Contract',
        where: {Supplier: req.params.id}
      }
    ],
  })
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
});

quotations.get('/', (req,res) => {
  Quotation.findAll({
    include:[
      {
        model: Request,
        as:'Contract',
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
      }
    ],
  })
  .then((quotations) => {
    res.json(quotations);
  })
  .catch(res.json.bind(res));
});

quotations.post('/', (req,res) =>{
  Quotation.create(
    {
      "type": req.body.buyer,
      "products_price": req.body.products_price,
      "delivery": req.body.delivery,
      "delivery_price": req.body.delivery_price,
      "accepted": req.body.accepted,
      "Request_Id": req.body.Request_Id,
    }
  );
  // Must update the intersection tables after that
});

quotations.put('/', (req,res) =>{
  Quotation.update(
    {
      "type": req.body.buyer,
      "products_price": req.body.products_price,
      "delivery": req.body.delivery,
      "delivery_price": req.body.delivery_price,
      "accepted": req.body.accepted,
    }
  );
  // Must update the intersection tables after that
});

quotations.delete('/:id', (req,res) =>{
  Quotation.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch(error => {
    console.log(error);
  });
});

module.exports = quotations;