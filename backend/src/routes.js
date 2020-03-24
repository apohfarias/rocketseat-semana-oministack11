const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');


const routes = express.Router();

//PARA LISTAR TODAS AS ONGS
routes.get('/ongs', OngController.index);

//PARA CRIAR ONGS
routes.post('/ongs', OngController.create);


//PARA CRIAR CASOS 'INCIDENTS'
routes.post('/incidents', IncidentController.create);

//PARA LISTAR TODOS OS CASOS
routes.get('/incidents', IncidentController.index);

//PARA DELETAR ALGUM CASO A PARTIR DE UM ID
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;