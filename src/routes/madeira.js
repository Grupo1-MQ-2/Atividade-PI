var express = require("express");
var router = express.Router();

var madeiraController = require("../controllers/madeiraController");

router.get("/:IdUsuario", function (req, res) {
  madeiraController.buscarMadeiraPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  madeiraController.cadastrar(req, res);
})

module.exports = router;