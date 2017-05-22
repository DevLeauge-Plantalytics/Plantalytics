/*jshint esversion:6*/

const express = require('express');
const messages = express.Router();
const {Message} = require('../../models');

posts.get('/', (req,res) => {
  Post.all()
    .then((posts) => {
      res.json(posts);
    })
    .catch(res.json.bind(res));
});

posts.post('/', (req,res) =>{
  Post.create(req.body)
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

posts.put('/:id', (req,res) =>{
  Post.update(req.body,
    {where: {"id": req.params.id}}
    )
    .then(res.json.bind(res))
    .catch(res.json.bind(res));
});

posts.delete('/:id', (req,res) =>{
  Post.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch(res.json.bind(res));
});

module.exports = posts;


module.exports = messages;