import express from 'express';

const app = express();

app.use(express.json());

/*
GET: Buscar ou listar uma informação
POST: Criar alguma nova informação
PUT: Atualizar uma informação existente
DELETE: Deletar uma informação existente

Corpo (Resquest Body): Dados para criação ou atualização de um registro
Route Params: Identificar qual recurso quer atualizar ou deletar 
Query Params: Paginação, filtros, ordenação
*/

app.get('/', (request, response) => {
    return response.json({message: 'Hello world'});
});

app.listen(3333);