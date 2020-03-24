const connection = require ('../database/connection');

module.exports = {
    //metodo que vai verificar o id logado
    async index (request, response){
        const ong_id = request.headers.authorization;

        //buscar todos os incidents de uma ong especifica (da que estiver logada no caso e que criou)
        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        //retorno do metodo
        return response.json(incidents);
    }

}