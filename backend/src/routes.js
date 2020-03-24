const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

//ROTA PARA VERIFICAR SE A ONG EXISTE OU NÃO
routes.post('/sessions', SessionController.create);

//ROTA PARA LISTAR TODAS AS ONGS
routes.get('/ongs', OngController.index);

//ROTA PARA CRIAR ONGS
routes.post('/ongs', OngController.create);


//ROTA PARA LISTAR OS CASOS DE UMA ONG ESPECIFICA
routes.get('/profile', ProfileController.index);


//ROTA PARA CRIAR CASOS 'INCIDENTS'
routes.post('/incidents', IncidentController.create);

//ROTA PARA LISTAR TODOS OS CASOS
routes.get('/incidents', IncidentController.index);

//ROTA PARA DELETAR ALGUM CASO A PARTIR DE UM ID
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;