const express = require('express');
const router = express.Router();
const listadb = require('../data/listadb')

  


router.get('/', (req, res, next) => {
    const query = req.query
    let todos = listadb.listadb
    if ('titolo' in query) {
      todos = todos.filter((todos) => {
        return todos.titolo === query.titolo
      })
    }
    if ('descrizione' in query) {
      todos = todos.filter((todos) => {
        return todos.descrizione === query.descrizione
      })
    }
    res.send(todos)
    // next();
  }, (req, res, next) => {
    console.log('FIRE 2')
  }
)


router.get('/:id/', (req, res) => {
//convert string in number
  const id = Number(req.params.id)
  res.json(listadb.listadb.filter(todos => todos.id === id))
})




module.exports = router

var todos = require('./todos');
console.log(todos);