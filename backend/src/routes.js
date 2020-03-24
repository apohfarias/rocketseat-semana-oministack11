const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

//PARA LISTAR TODAS AS ONGS
routes.get('/ongs', OngController.index);

//PARA CRIAR ONGS
routes.post('/ongs', OngController.create);

module.exports = routes;