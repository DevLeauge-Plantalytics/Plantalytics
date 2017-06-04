/*jshint esversion:6*/

const express = require('express');
const quotations = express.Router();
const {Quotation, User, Request, Product, Req_Prod_Requested, Req_Prod_Offered} = require('../../models');

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
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
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
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

quotations.get('/contract-buyer/:id', (req,res) => {
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
          },
          {
            model:Product,
            as: "interTableOff"
          },
          {
            model:Product,
            as: "interTableReq"
          }
        ],
        where: {$or: [{Supplier: req.params.id}, {Buyer: req.params.id}], accepted: true}
      }
    ],
    where: {accepted: true}
  })
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

quotations.get('/contract-supplier/:id', (req,res) => {
  Quotation.findAll({
    include:[
      {
        model: Request,
        as:'Contract',
        where: {Supplier: req.params.id, accepted: true}
      }
    ],
    where: {accepted: true}
  })
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
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
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

const updateIntTable = (req, res) => {
  console.log("entered the update table");
  return Promise.all([
    Product.findAll({where: {id: {$in: req.body.request_products.map(p => p.id)}}}).then( (requested_products) => {
      requested_products = requested_products.map(p => {
        let quantity = req.body.request_products.filter(rp => rp.id === p.id).reduce(( _, rp ) => rp, null).quantity;
        p.quantity = quantity;
        return p;
      });
      return Req_Prod_Offered.findAll({limit:1, where:{RequestId: req.body.Request_Id}, order: [['createdAt', 'DESC']]})
      .then( (lastRequest) => {
        return Promise.all(requested_products.map( rp => {
          return Req_Prod_Offered.create({
            quantity: rp.quantity,
            ProductId: rp.id,
            RequestId: Number(req.body.Request_Id),
            version: Number(lastRequest[0].dataValues.version) + 1
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
      return Req_Prod_Offered.findAll({limit:1, where:{RequestId: req.body.Request_Id}, order: [['createdAt', 'DESC']]})
      .then( (lastRequest) => {
        return Promise.all(offered_products.map( rp => {
          return Req_Prod_Requested.create({
            quantity: rp.quantity,
            ProductId: rp.id,
            RequestId: Number(req.body.Request_Id),
            version: Number(lastRequest[0].dataValues.version) + 1
          });
        }));
      });
    }),
    Request.update({
      "accepted": false,
    },{
      where: {id: Number(req.body.Request_Id)},
    })
  ])
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
};

quotations.post('/', (req,res) =>{
  if(req.body.products_price !== 0 || req.body.delivery_price !== 0 || req.body.offered_products.length !== 0 || req.body.request_products.length !== 0 || req.body.accepted !== true){
    console.log("test");
    Req_Prod_Requested.findAll({where: {RequestId: req.body.Request_Id}})
    .then(data => {
      let match = 0;
      for(let i = 0; i < req.body.offered_products.length; i++){
        for(let j = 0; j < req.body.offered_products.length; j++){
          if(req.body.offered_products[i].id === data.map(x => { return x.dataValues;})[j].ProductId){
            match +=1;
          }
        }
        if(match === 0){
          throw new Error("Offered products must be exactly the same as the requested products");
        }
        match = 0;
      }
    })
    .then( () => {
      return Product.findAll({where: {id: {$in: req.body.request_products.map(p => p.id)}}})
      .then(data => {
        return Request.findOne({where: {id: Number(req.body.Request_Id)}})
        .then( request => {
          let purchaser = request.Buyer;
          for(let i = 0; i < req.body.request_products.length; i++){
            if(data.map(x => { return x.dataValues;})[i] === undefined || data.map(x => { return x.dataValues;})[i].Owner_Id !== Number(purchaser)){
              throw new Error("products requested must belong to the person requested");
            }
          }
        });
      });
    })
    .then( () => {
      return Quotation.create(
        {
          "type": req.body.type,
          "products_price": req.body.products_price,
          "delivery": req.body.delivery,
          "delivery_price": req.body.delivery_price,
          "accepted": req.body.accepted,
          "Request_Id": req.body.Request_Id,
        }
      );
    })
    .then( () => {
      updateIntTable(req, res);
    })
    .catch((err) => {
      res.status(400).send({error: err.message});
    });
  } else {
    return Quotation.create(
      {
        "type": req.body.type,
        "products_price": req.body.products_price,
        "delivery": req.body.delivery,
        "delivery_price": req.body.delivery_price,
        "accepted": req.body.accepted,
        "Request_Id": req.body.Request_Id,
      }
    )
    .then(res.json.bind(res))
    .catch((err) => {
      res.status(400).send({error: err.message});
    });
  }
});

quotations.put('/:id', (req,res) =>{

if(req.body.type !== "trade" || req.body.products_price !== "0" || req.body.delivery_price !== 0 || req.body.offered_products.length !== 0 || req.body.request_products !== 0 || req.body.accepted !== true){
    Req_Prod_Requested.findAll({where: {RequestId: req.body.Request_Id}})
    .then(data => {
      let match = 0;
      for(let i = 0; i < req.body.offered_products.length; i++){
        for(let j = 0; j < req.body.offered_products.length; j++){
          if(req.body.offered_products[i].id === data.map(x => { return x.dataValues;})[j].ProductId){
            match +=1;
          }
        }
        if(match === 0){
          throw new Error("Offered products must be exactly the same as the requested products");
        }
        match = 0;
      }
    })
    .then( () => {
      return Product.findAll({where: {id: {$in: req.body.request_products.map(p => p.id)}}})
      .then(data => {
        return Request.findOne({where: {id: Number(req.body.Request_Id)}})
        .then( request => {
          let purchaser = request.Buyer;
          for(let i = 0; i < req.body.request_products.length; i++){
            if(data.map(x => { return x.dataValues;})[i] === undefined || data.map(x => { return x.dataValues;})[i].Owner_Id !== Number(purchaser)){
              throw new Error("products requested must belong to the person requested");
            }
          }
        });
      });
    })
    .then( () => {
      return Quotation.update(
        {
          "type": req.body.buyer,
          "products_price": req.body.products_price,
          "delivery": req.body.delivery,
          "delivery_price": req.body.delivery_price,
          "accepted": req.body.accepted,
        },{
        where: {Request_Id: req.params.id}
        }
      );
    })
    .then( () => {
       updateIntTable(req, res);
    })
    .catch((err) => {
      res.status(400).send({error: err.message});
    });
  }
});

quotations.delete('/:id', (req,res) =>{
  Quotation.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = quotations;