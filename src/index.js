const { request, response } = require('express');
const express = require('express');
const{v4:uuidv4} = require("uuid")

const app = express();

app.use(express.json())

const custumers = []

/**
 * cpf  - string
 * name - sttring
 * id - uuid
 * statement - []
 */
app.post("/conta",(request,response)=>{
  const {cpf,name} = request.body;
  const user_ja_tem = custumers.some(
    (customer)=> customer.cpf === cpf
  )
  
  if(user_ja_tem){
    return response.status(400).json({error:"CPF já existe"});
  }

  custumers.push({
    cpf,
    name,
    id:uuidv4(),
    statement:[]
  })
  return response.status(201).send();
})

app.listen(3333)