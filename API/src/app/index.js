const express = require('express');
const routes = require('./routes/index.js');
const path = require('path')
const app = express();
const cors = require('cors')

app.use(express.json());

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "*");
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  app.use(cors());
  next();
});

app.use('/files',express.static(path.resolve(__dirname,"uploads")));

app.use(routes);


app.listen(3333, () => {
  console.log("Servidor funcionando!!! https://localhost:3333/")
})