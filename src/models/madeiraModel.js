var database = require("../database/config");

function buscarMadeiraPorUsuario(idUsuario) {

  var instrucaoSql = `SELECT * FROM madeira  WHERE fk_usuario = ${usuario_id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, usuario_id) VALUES (${descricao}, ${usuario_id})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarMadeiraPorUsuario,
  cadastrar
}
