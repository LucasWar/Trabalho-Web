const connect =  require('../config/index');
const { v4 } = require('uuid');

class cursosRepositories{
    async findImg(id){
        const conn = await connect.connect();
        const sql = ('SELECT img FROM cursos WHERE id = ?;');
        const [rows] = await conn.query(sql,[id]);
        return rows[0].img;
    }
    async findAll(){
        const conn = await connect.connect();
        const [rows] = await conn.query('SELECT * FROM cursos;');
        return rows;
    }

    async findById(id){
        const conn = await connect.connect();
        const sql = ('SELECT * FROM cursos WHERE id=?');
        const  [rows]  = await conn.query(sql,[id]);
        return rows;
    }
    
    async delete(id){
        const conn = await connect.connect();
        let sql = await("DELETE  FROM favoritos_cursos WHERE idCurso = ?")
        await conn.query(sql,[id]);
        sql = ('DELETE FROM cursos WHERE id=?');
        await conn.query(sql,[id]);
    }

    async update(id,nome,descricao,tag,img){
        const conn = await connect.connect();
        const sql = ('UPDATE cursos SET nome=?,img=?,tag=?,descricao=? WHERE id=?');
        await conn.query(sql,[nome,img,tag,descricao,id]);
        const curso = {
            "nome":nome,
            "img": img,
            "tag": tag,
            "decricao": descricao
        };
        return curso;
    }

    async create(nome, descricao,tag, img){
        const conn = await connect.connect();
        const id = v4();
        const sql = ('INSERT INTO cursos(nome, img, tag, descricao, id) VALUES (?,?,?,?,?)');
        await conn.query(sql,[nome,img,tag,descricao,id]);
        const curso = {
            "nome":nome,
            "img": img,
            "tag": tag,
            "decricao": descricao
        };
        return curso;
    }

    async addCursoFavoritos(idCurso,email){
        const conn = await connect.connect();
        const sql = ('INSERT INTO favoritos_cursos(idCurso,idFavoritos)VALUES(?,(SELECT id FROM favoritos WHERE emailAluno = ?))');
        await conn.query(sql,[idCurso,email]);
    }

    async findAulasById(id){
        const conn = await connect.connect();
        const sql = ("SELECT * FROM aulas WHERE idCurso = ? ORDER BY nome ASC");
        const [rows] = await conn.query(sql,[id]);
        return rows;
    }

    async deleteAllAulas(idCurso){
        const conn = await connect.connect();
        const sql = ('DELETE FROM aulas WHERE idCurso=?');
        await conn.query(sql,[idCurso]);
        
    }
    
}

module.exports = new cursosRepositories();