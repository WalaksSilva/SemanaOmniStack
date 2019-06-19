const express = require('express');

const usuarioController = require('./controllers/usuarioController');

const routes = new express.Router();

//Usuario
routes.get('/usuario', usuarioController.listar);
routes.post('/usuario', usuarioController.criar);

module.exports = routes;