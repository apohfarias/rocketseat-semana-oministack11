const connection = require ('../database/connection');

module.exports = {
    //método inicial que irá listar todos os incidents cadastrados
    async index(request, response){
        const incidents =  await connection('incidents').select('*');
        
        //retorno da listagem, vai devolver um array de incidents
        return response.json(incidents);
    },


    //método que vai criar um incident a partir das infos que vier de routes
    async create(request, response)  {
        const {title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        //inserindo as informações no banco de dados
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        //retorno do método create, vai devolver o id do incident criado
        return response.json({ id });
  },

  //Método que vai deletar o que a rota pedir
  async delete(request, response){
      const { id } = request.params;
      const ong_id = request.headers.authorization;

      //buscando os incidents da ong que solicitou delete, pra não apagar de outra
      const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

     //verificação se o id retornado for diferente do id logado, retorna um erro
     if (incident.ong_id !== ong_id){
         return response.status(401).json({ error: 'Operation not permitted!' });
     }
     //se passar na verificação, aí sim deleta do banco
     await connection ('incidents').where('id',id).delete();

     //Resposta de sucesso, mas que não tem conteudo pra exibir
     //PS: Aprenda mais sobre codigos de erros em: https://http.cat/  =D
     return response.status(204).send();
    
  }
};