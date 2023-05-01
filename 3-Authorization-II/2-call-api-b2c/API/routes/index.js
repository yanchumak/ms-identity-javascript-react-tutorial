const express = require('express');
const todolist = require('../controllers/todolist');
const tokenEnrichment = require('../controllers/tokenEnrichment');

// initialize router
const router = express.Router();


router.post('/token/enrichment', tokenEnrichment.enrichToken);

router.get('/todolist', todolist.getTodos);

router.get('/todolist/:id', todolist.getTodo);

router.post('/todolist', todolist.postTodo);

router.put('/todolist/:id', todolist.updateTodo);

router.delete('/todolist/:id', todolist.deleteTodo);

module.exports = router;




