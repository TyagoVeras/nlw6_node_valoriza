import express, { response } from "express";

const app = express();

/*
 * GET ==> BUSCAR UMA INFORMAÇÃO
 * POST ==> INSERIR (CRIAR) UMA INFORMAÇÃO
 * PUT ==> ALTERAR UMA INFORMAÇÃO
 * DELETE ==> REMOVE UM DADO
 * PATCH ==> ALTERAR UM DADO ESPECIFICO 
*/

app.get('/teste', (req, res)=>{
  //REQUEST -> ENTRANDO
  //RESPONSE -> SAINDO
  return res.send('ola')
});

app.post('/test-post',(req, res)=>{
  return res.send('veio por post');
});
app.listen(3000, ()=> console.log("server is runiniing")) 