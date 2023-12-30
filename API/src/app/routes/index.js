const {Router} = require('express');
const cursosRoutes =  require('./cursos.routes.js');
const alunoRoutes =  require('./alunos.routes.js');
const aulaRoutes =  require('./aulas.routes.js');
const favoritosRoutes =  require('./favoritos.routes.js');
const routes = Router();

routes.use('/favoritos', favoritosRoutes);
routes.use('/cursos', cursosRoutes);
routes.use('/alunos', alunoRoutes);
routes.use('/aulas', aulaRoutes);

module.exports = routes