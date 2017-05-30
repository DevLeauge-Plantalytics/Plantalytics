/*jshint esversion:6*/

const express = require('express');
const locations = express.Router();
const {Location, User} = require('../../models');

locations.get('/suppliers', (req,res) => {
  Location.findAll({
    include:[
      {
        model:User,
        as:'Locator',
        where: {supplier: true}
      }
    ],
  })
  .then((locations) => {
    res.json(locations);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

locations.get('/', (req,res) => {
  Location.findAll()
  .then((users) => {
    res.json(locations);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

locations.get('/:id', (req,res) => {
  Location.findOne({
    include: [
      {
        model:User,
        as:'Locator',
        where: {id: req.params.id},
      }
    ],
  })
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

locations.post('/', (req,res) =>{
  Location.create(req.body)
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

locations.delete('/:id', (req,res) =>{
  Location.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = locations;