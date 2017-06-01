/*jshint esversion:6*/

const express = require('express');
const requests = express.Router();
const {Request, Product, Req_Prod_Requested, Req_Prod_Offered} = require('../../models');

requests.get('/buyer/:id', (req,res) => {
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
    where: {Buyer: req.params.id},
    order: [['createdAt','DESC']]
  })
  .then((requests) => {
    res.json(requests);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

requests.get('/supplier/:id', (req,res) => {
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
    where: {Supplier: req.params.id},
    order: [['createdAt','DESC']]
  })
  .then((requests) => {
    res.json(requests);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

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
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

const updateIntTable = (req, res, request) => {
  return Promise.all([
    Product.findAll({where: {id: {$in: req.body.request_products.map(p => p.id)}}}).then( (requested_products) => {
      // add the quantity
      requested_products = requested_products.map(p => {
        let quantity = req.body.request_products.filter(rp => rp.id === p.id).reduce(( _, rp ) => rp, null).quantity;
        p.quantity = quantity;
        return p;
      });
      return Req_Prod_Offered.findAll({limit:1, where:{RequestId: req.body.Request_Id}, order: [['createdAt', 'DESC']]})
      .then( (lastRequest) => {
        let version = 0;
        if(lastRequest[0] === undefined) {
          version = 1;
        } else {
          version = Number(lastRequest[0].dataValues.version) + 1;
        }
        return Promise.all(requested_products.map( rp => {
          return Req_Prod_Requested.create({
            quantity: rp.quantity,
            ProductId: rp.id,
            RequestId: request.id,
            version: version
          });
        }));
      });
    }),
    Product.findAll({where: {id: {$in: req.body.offered_products.map(p => p.id)}}}).then( (offered_products) => {
      // add the quantity
      offered_products = offered_products.map(p => {
        let quantity = req.body.offered_products.filter(rp => rp.id === p.id).reduce(( _, rp ) => rp, null).quantity; // { id, quantity }
        p.quantity = quantity;
        return p;
      });
      return Promise.all(offered_products.map( rp => {
        return Req_Prod_Offered.create({
          quantity: rp.quantity,
          ProductId: rp.id,
          RequestId: request.id
        });
      }));
    })
  ])
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
};

requests.post('/', (req,res) =>{
  // requested products must belong to the supplier
  Product.findAll({where: {id: {$in: req.body.request_products.map(p => p.id)}}})
  .then(data => {
    for(let i = 0; i < req.body.request_products.length; i++){
      if(data.map(x => { return x.dataValues;})[i] === undefined || data.map(x => { return x.dataValues;})[i].Owner_Id !== Number(req.body.supplier)){
        throw new Error("requested products must belong to the supplier");
      }
    }
  })

  .then( () => {
    return Product.findAll({where: {id: {$in: req.body.offered_products.map(p => p.id)}}})
      .then(data => {
        for(let i = 0; i < req.body.offered_products.length; i++){
          if(data.map(x => { return x.dataValues;})[i] === undefined || data.map(x => { return x.dataValues;})[i].Owner_Id !== Number(req.body.buyer)){
            throw new Error("products offered must belong to me");
          }
        }
      });
  })
  .then( () => {
    return Request.create(
      {
        "Buyer": req.body.buyer,
        "Supplier": req.body.supplier,
      }
    );
  })
  .then( (request) => {
    updateIntTable(req, res, request);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

requests.put('/', (req,res) =>{
  // requested products must belong to the supplier
  Product.findAll({where: {id: {$in: req.body.request_products.map(p => p.id)}}})
  .then(data => {
    for(let i = 0; i < req.body.request_products.length; i++){
      if(data.map(x => { return x.dataValues;})[i] === undefined || data.map(x => { return x.dataValues;})[i].Owner_Id !== Number(req.body.supplier)){
        throw new Error("requested products must belong to the supplier");
      }
    }
  })

  .then( () => {
    return Product.findAll({where: {id: {$in: req.body.offered_products.map(p => p.id)}}})
      .then(data => {
        for(let i = 0; i < req.body.offered_products.length; i++){
          if(data.map(x => { return x.dataValues;})[i] === undefined || data.map(x => { return x.dataValues;})[i].Owner_Id !== Number(req.body.buyer)){
            throw new Error("products offered must belong to me");
          }
        }
      });
  })
  .then( () => {
    return Request.update(
      {
        "accepted": req.body.accepted,
      }
    );
  })
  .then( (request) => {
    updateIntTable(req, res, request);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

requests.delete('/:id', (req,res) =>{
  Request.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = requests;