const connect =  require('../config/index')
const { v4 } = require('uuid')

class alunoRepositories{
    async findAll(orderBy = "ASC",colum = "nome"){
        const colums  = ['nome','email'];
        colum = colums.indexOf(colum.toLowerCase()) !== -1 ? colum: 'nome';
        const conn = await connect.connect();
        orderBy = orderBy.toUpperCase() === 'DESC' ? 'DESC': 'ASC';
        const [rows] = await conn.query(`SELECT * FROM aluno ORDER BY ${colum} ${orderBy};`);
        return rows;
    }

    async findByEmail(email){
        const conn = await connect.connect();
        const sql = "SELECT * FROM aluno WHERE email = ?";
        const [rows]  = await conn.query(sql,[email]);
        return rows;
    }
    
    async delete(email){
        const conn = await connect.connect();
        let sql = "DELETE FROM favoritos_cursos WHERE idFavoritos  = (SELECT id FROM favoritos WHERE emailAluno  = ?);";
        await conn.query(sql,[email]);
        sql = "DELETE FROM favoritos WHERE emailAluno = ?;";
        await conn.query(sql,[email]);
        sql = "DELETE FROM aluno WHERE email = ?;";
        await conn.query(sql,[email]);
    }

    async update(email,nome,senha){
        const conn = await connect.connect();
        const sql = "UPDATE aluno SET nome = ?,senha=? WHERE email = ?"
        await conn.query(sql,[nome,senha,email]);
        const newAluno = {
            "nome":nome,
            "email": email,
            "senha": senha
        };
        return newAluno;

    }

    async create(email,nome,senha){
        const conn =  await connect.connect();
        const idFavoritos = v4();
        let sql = "INSERT INTO aluno(email,nome,senha) VALUES(?,?,?)";
        await conn.query(sql,[email,nome,senha]);
        sql = "INSERT INTO favoritos(id,emailAluno) VALUEs(?,?)";
        await conn.query(sql,[idFavoritos,email]);
        const newAluno = {
            "nome":nome,
            "email": email,
            "idFavoritos": idFavoritos
        };
        return newAluno;
    }

    async findFavoritosByEmail(email){

        const conn = await connect.connect();
        const sql = "SELECT cs.nome,cs.descricao,cs.img,cs.tag,cs.id FROM cursos AS cs,favoritos_cursos AS fc, favoritos AS f WHERE cs.id = fc.idCurso AND fc.idFavoritos = f.id AND f.emailAluno = ?;";
        const [rows] = await conn.query(sql,[email]);
        return rows;
        // async function pegarCursos(idCurso){
        //     const conn = await connect.connect();
        //     const sql = "SELECT * FROM cursos WHERE id = ?";
        //     const [rows] = await conn.query(sql,[idCurso]);
        //     return rows[0];
        // }

        // var cursos  = [];
        // const conn = await connect.connect();
        // const sql = "SELECT idCurso FROM favoritos_cursos WHERE idFavoritos = (SELECT id FROM favoritos WHERE emailAluno = ?)";
        // const [rows] = await conn.query(sql,[email]);
        // for(var i = 0; i<rows.length; i++){
        //     cursos.push( await pegarCursos(rows[i].idCurso))
        // }
        // return cursos;
    }

    async verificLogin(email,senha){
        const conn = await connect.connect();
        const sql = "SELECT * FROM aluno WHERE email = ? AND senha = ?";
        const [rows] = await conn.query(sql,[email,senha]);
        return rows;
    }

}

module.exports = new alunoRepositories();