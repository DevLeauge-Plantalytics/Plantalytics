/*jshint esversion:6*/
const express = require('express');
const D3 = express.Router();
const {D3soil, D3rainfall, D3temp} = require('../../models');

D3.get('/rainfall', (req,res) => {
  D3rainfall.all()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

D3.get('/temp', (req,res) => {
  D3temp.all()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

D3.get('/soil', (req,res) => {
  D3soil.all()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = D3;