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
  .catch(res.json.bind(res));
});

locations.get('/', (req,res) => {
  Location.all()
    .then((users) => {
      res.json(locations);
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
  .catch(res.json.bind(res));
});

locations.post('/', (req,res) =>{
  Location.create(req.body)
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

locations.delete('/:id', (req,res) =>{
  Location.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch(error => {
    console.log(error);
  });
});

module.exports = locations;