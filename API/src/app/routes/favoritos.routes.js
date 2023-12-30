const { Router, response } = require('express');
const favoritosRouter = Router();
const favoritosController = require('../controller/favoritoController');


favoritosRouter.get('/',favoritosController.index);
favoritosRouter.delete('/:emailAluno/:idCurso',favoritosController.removeCurso);


module.exports = favoritosRouter;