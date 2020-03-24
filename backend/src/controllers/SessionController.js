const connection = require ('../database/connection');

module.exports = {
    //Método que vai verificar se a ong realmente existe
    async create(request, response){
        const {id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();


        //se a ong não existir vai retornar uma resposta com erro
        if (!ong){
            return response.status(400).json({ error: 'No ONG found with this ID!'});
        }

        return response.json(ong);
    } 
}