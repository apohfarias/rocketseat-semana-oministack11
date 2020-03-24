const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    //return response.send('Hello World');
    const body = request.body;
    console.log(body);
    
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluna: 'Apolyane Farias'
    });

});

module.exports = routes;