
/*
Métods HTTP

GET: Busca/lista uma informação no backend
POST: Cria uma informação no backend
PUT: Altera uma informação no backend
DELETE: Deleta uma informação no backend
*/

/*
Tipos de parâmetros:
Query Params: Parâmetros nomeados enviados na rota após "?"  (Filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

*/

/**
 * BANCO DE DADOS
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users 
  * Query Builder: table('users').select('*').where()
  */
const express  = require ('express');
const cors = require('cors');
const { errors } = require ('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(3333);

module.exports = app;

