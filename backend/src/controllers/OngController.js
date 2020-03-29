const generateUniqueId = require ('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {

    //método que irá listar todas as ongs cadastradas
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        //retorno da consulta, vai devolver um array de ongs
        return response.json(ongs);
    },

    //método que vai criar uma ong
    async create (request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        //vai criar um id randomico de 4 bytes em hexadecimal
        const id = generateUniqueId();
    
        //inserindo no banco de dados
       await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
    
        });
        //console.log(data);
        
        // retorno do método create, devolve o id da ong
        return response.json({ id });
    }
};