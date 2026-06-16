var madeiraModel = require("../models/madeiraModel");

function buscarMadeiraPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  madeiraModel.buscarMadeiraPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as madeiras: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;
  var durabilidade = req.body.descricao;
  var estabilidade = req.body.descricao;
  var exposicao = req.body.descricao;
  var selagem = req.body.descricao;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (durabilidade == undefined) {
    res.status(400).send("durabilidade está undefined!");  
  } else if (estabilidade == undefined) {
    res.status(400).send("estabilidade está undefined!");
  } else if (exposicao == undefined) {
    res.status(400).send("exposicao está undefined!");
  } else if (selagem == undefined) {
    res.status(400).send("selagem está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {

    madeiraModel.cadastrar(descricao, idUsuario, estabilidade, exposicao, durabilidade, selagem)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarMadeiraPorUsuario,
  cadastrar
}