var express = require('express');
var router = express.Router();

var { Todos } = require('../models/todos')
/* GET home page. */
router.get('/', async function(req, res, next) {
  const todos = await Todos.find();
  console.log('todos: ', todos)
  res.render('index', { title: 'ToDos', todos: todos });
});

module.exports = router;
