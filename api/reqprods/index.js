/*jshint esversion:6*/

const express = require('express');
const reqprods = express.Router();
const {Req_Prod} = require('../../models');
//const db = require('../../models');
//const User = db.User;

reqprods.get('/', (req,res) => {
  Req_Prod.all()
    .then((data) => {
      res.json(data);
    });
});

module.exports = reqprods;