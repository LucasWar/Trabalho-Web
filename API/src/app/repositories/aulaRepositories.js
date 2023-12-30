const connect =  require('../config/index')
const { v4 } = require('uuid')

class aulaRepositories{
    async findAll(){
        const conn = await connect.connect();
        const [rows] = await conn.query("SELECT * FROM aulas;");
        return rows;
    }

    async findById(id){
        const conn = await connect.connect();
        const sql = "SELECT * FROM aulas WHERE id = ?";
        const [rows]  = await conn.query(sql,[id]);
        return rows;
    }

    async findByLink(link){
        const conn = await connect.connect();
        const sql = "SELECT * FROM aulas WHERE link = ?";
        const [rows]  = await conn.query(sql,[link]);
        return rows;
    }
    
    async delete(id){
        const conn = await connect.connect();
        const sql = "DELETE FROM aulas WHERE id = ?;";
        await conn.query(sql,[id]);
    }

    async update(id,idCurso,nome,link){
        const conn = await connect.connect();
        const sql = "UPDATE aulas SET nome = ?,link=?,idCurso = ? WHERE id = ?"
        await conn.query(sql,[nome,link,idCurso,id]);
  
    }

    async create(idCurso,nome,link){
        const conn =  await connect.connect();
        const id = v4();
        const sql = "INSERT INTO aulas(id,idCurso,nome,link) VALUES(?,?,?,?)"
        await conn.query(sql,[id,idCurso,nome,link])
    }
 
}

module.exports = new aulaRepositories();