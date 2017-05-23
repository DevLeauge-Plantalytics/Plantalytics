/*jshint esversion:6*/

const express = require('express');
const messages = express.Router();
const {Message, User, Request} = require('../../models');

messages.get('/', (req,res) => {
  Message.all()
    .then((posts) => {
      res.json(posts);
    })
    .catch(res.json.bind(res));
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
        where: {id: req.params.id},
      }
    ],
  })
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
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
  .catch(res.json.bind(res));
});

messages.post('/', (req,res) =>{
  Message.create(req.body)
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

messages.put('/:id', (req,res) =>{
  Message.update(req.body,
    {where: {"id": req.params.id}}
    )
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

messages.delete('/:id', (req,res) =>{
  Message.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
});

module.exports = messages;