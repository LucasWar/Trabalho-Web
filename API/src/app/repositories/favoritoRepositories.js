const connect =  require('../config/index')
const { v4 } = require('uuid')

class favoritoRepositories{
    async removeCurso(emailAluno,idCurso){
        const conn = await connect.connect();
        const sql = "DELETE FROM favoritos_cursos WHERE idCurso = ? AND idFavoritos = (SELECT id FROM favoritos WHERE emailAluno = ?)";
        await conn.query(sql,[idCurso,emailAluno]);
    }

    async findAll(){
        const conn = await connect.connect();
        const favoritos = await conn.query("SELECT * FROM favoritos_cursos");
        return favoritos;
    }
}

module.exports = new favoritoRepositories();
