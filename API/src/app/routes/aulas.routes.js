const { Router, response } = require('express');
const aulaRouter = Router();
const aulaController = require('../controller/aulaController')


aulaRouter.get('/',aulaController.index);
aulaRouter.get('/:id',aulaController.show);

aulaRouter.post('/',aulaController.store);

aulaRouter.delete('/:id',aulaController.delete);

aulaRouter.put('/:id',aulaController.update);


module.exports = aulaRouter;