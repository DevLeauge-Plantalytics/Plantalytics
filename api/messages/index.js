/*jshint esversion:6*/

const express = require('express');
const messages = express.Router();
const {Message, User, Request} = require('../../models');

messages.get('/', (req,res) => {
  Message.all({
    order: [['createdAt','DESC']]
  })
  .then((posts) => {
    res.json(posts);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

messages.get('/:id', (req,res) => {
  Message.findall({
    include: [
      {
        model:User,
        as:'Author',
        where: {id: req.params.id},
      },
      {
        model:User,
        as:'Listener',
      }
    ],
  })
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

messages.get('/requests/:id', (req,res) => {
  Message.findAll({
    include: [
      {
        model:Request,
        where: {id: req.params.id},
      }
    ],
  })
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

messages.post('/', (req,res) =>{
  Message.create(req.body)
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

messages.put('/:id', (req,res) =>{
  Message.update(req.body,
    {where: {"id": req.params.id}}
    )
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

messages.delete('/:id', (req,res) =>{
  Message.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = messages;