const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json())
/**
 * get - buscar informação
 * post - inserir informação no servidor
 * put - alterar informação do servidor
 * patch - alterar informação especifica
 * delete - deletar informação do servidor
 */

/**
 * Tipos de parâmetros 
 * 
 * Route params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação, filtr de busca
 * Body Params => Os objetos de inserção/lteração(JSON)
 */
app.get("/courses",(request,response)=>{
  //return response.send("hello world")
  //   {{ _.URL }}/courses?page=1&order=asc
  const Query = request.query;
  console.log(Query)
  return response.json(["Curso 1", "Curso 2","Curso 3"])
})

app.post("/courses",(request,response)=>{
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2","Curso 3","Curso 4"])
})

app.put("/courses/:id",(request,response)=>{
  //  {{ _.URL }}/courses/12
  const {id} = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2","Curso 3","Curso 4"])
})

app.patch("/courses/:id",(request,response)=>{
  return response.json(["Curso 6", "Curso 7","Curso 3","Curso 4"])
})

app.delete("/courses/:id",(request,response)=>{
  return response.json(["Curso 6", "Curso 7","Curso 4"])
})

app.listen(3333)