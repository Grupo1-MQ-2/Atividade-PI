var database = require("../database/config");

function buscarMadeiraPorUsuario(idUsuario) {

  var instrucaoSql = `SELECT * FROM madeira WHERE fk_usuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(descricao, idUsuario, durabilidade, estabilidade, exposicao, selagem) {
  
  var instrucaoSql = `
    INSERT INTO madeira (descricao, fk_usuario, durabilidade, estabilidade, exposicao, selagem) 
    VALUES ('${descricao}', ${idUsuario}, '${durabilidade}', '${estabilidade}', '${exposicao}', '${selagem}')
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarMadeiraPorUsuario,
  cadastrar
}