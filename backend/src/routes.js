const express = require('express');
const {  celebrate, Segments, Joi } = require ('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

//ROTA PARA VERIFICAR SE A ONG EXISTE OU NÃO
routes.post('/sessions', SessionController.create);

//ROTA PARA LISTAR TODAS AS ONGS
routes.get('/ongs', OngController.index);

//ROTA PARA CRIAR ONGS com validação das entradas
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);


//ROTA PARA LISTAR OS CASOS DE UMA ONG ESPECIFICA validando o authorization sendo obrigatorio
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


//ROTA PARA CRIAR CASOS 'INCIDENTS'   || FAZER ESSAS VALLIDAÇÕES
routes.post('/incidents', IncidentController.create);

//ROTA PARA LISTAR TODOS OS CASOS com validação da página sendo numerica
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

//ROTA PARA DELETAR ALGUM CASO A PARTIR DE UM ID validando o id sendo numero e obrigatorio
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;