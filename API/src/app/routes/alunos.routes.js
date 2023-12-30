const { Router, response } = require('express');
const alunoRouter = Router();
const alunoController = require('../controller/alunoController')


alunoRouter.get('/',alunoController.index);
alunoRouter.get('/:email',alunoController.show);
alunoRouter.get('/favoritos/:email',alunoController.showFavoritos);

alunoRouter.post('/login',alunoController.login);
alunoRouter.post('/',alunoController.store);

alunoRouter.delete('/:email',alunoController.delete);

alunoRouter.put('/:email',alunoController.update);



module.exports = alunoRouter;