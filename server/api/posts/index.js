/*jshint esversion:6*/
const express = require('express');
const posts = express.Router();
const {Post} = require('../../models');

posts.get('/', (req,res) => {
  Post.all()
  .then((posts) => {
    res.json(posts);
  })
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

posts.post('/', (req,res) =>{
  Post.create(req.body)
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

posts.put('/:id', (req,res) =>{
  Post.update(req.body,
    {where: {"id": req.params.id}}
    )
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

posts.delete('/:id', (req,res) =>{
  Post.destroy({where: {"id": req.params.id}})
  .then(res.json.bind(res))
  .catch((err) => {
    res.status(400).send({error: err.message});
  });
});

module.exports = posts;