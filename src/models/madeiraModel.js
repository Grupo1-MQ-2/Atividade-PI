var database = require("../database/config");

function buscarMadeiraPorUsuario(idUsuario) {

  var instrucaoSql = `SELECT * FROM madeira WHERE fk_usuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, descricao, idUsuario, durabilidade, estabilidade, exposicao, selagem) {
  
  var instrucaoSql = `
    INSERT INTO madeira (nome, descricao, fk_usuario, classificacao_de_durabilidade_natural, Estabilidade_Dimensional, Exposicao_ao_Ambiente, Necessidade_de_Tratamento_e_Selagem) 
    VALUES ('${nome}','${descricao}', ${idUsuario}, '${durabilidade}', '${estabilidade}', '${exposicao}', '${selagem}')
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarMadeiraPorUsuario,
  cadastrar
}