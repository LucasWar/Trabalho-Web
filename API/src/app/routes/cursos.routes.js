const { Router, response } = require('express');
const cursosRouter = Router();
const cursoController = require('../controller/cursoController');
const cursosRepositories = require("../repositories/cursosRepositories");
const multer = require('multer');



const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,callback){
            callback(null,'src/app/uploads');
        },
        filename(req,file,callback){
            callback(null,`${Date.now()}-${file.originalname}`)
        }
    }),
    
});

cursosRouter.get('/',cursoController.index);
cursosRouter.get('/:id',cursoController.show);
cursosRouter.delete('/:id',cursoController.delete);
cursosRouter.post('/',cursoController.store);
cursosRouter.put('/:id',cursoController.update);
cursosRouter.post('/:idCurso/:emailAluno',cursoController.addCursoFavoritos);
cursosRouter.get('/aulas/:id',cursoController.showAulas);


module.exports = cursosRouter;