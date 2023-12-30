const { response } = require("express");
const cursosRepositories = require("../repositories/cursosRepositories");
const fs = require('fs') 

class cursoController{
    async index(request,response){
        await cursosRepositories.findAll().then((cursos) => {
            return response.json({
                cursos,
                url: "https://localhost:3333/files/"
            });
        });
        
    }

    async show(request,response){
        const { id } = request.params;
        const curso = await cursosRepositories.findById(id);
        if(!curso){
            return response.status(404).json({error:"Curso não encontrado"})
        }
        response.json(curso)
    }

    async store(request,response){
        //const img =request.file.filename;
        const { nome, descricao,tag,img } = request.body;
        const curso = await cursosRepositories.create(nome, descricao,tag, img);
        response.json(curso);
    }


    async delete(request,response){
        const { id } = request.params;
        //const nameImage = await cursosRepositories.findImg(id);

        // fs.rm(src/app/uploads/${nameImage},(err) => {
        //     if(err){
        //         console.log(err.message);
        //         return;
        //     }
        //     return;
        // });

        const curso = await cursosRepositories.findById(id);
        if(!curso){
            return response.status(404).json({error:"Curso não encontrado"})
        }
        await cursosRepositories.deleteAllAulas(id);
        await cursosRepositories.delete(id)
        response.sendStatus(204)
    }

    async update(request,response){
        const { id } = request.params;
        // const nameImage = await cursosRepositories.findImg(id);

        // fs.rm(src/app/uploads/${nameImage},(err) => {
        //     if(err){
        //         console.log(err.message);
        //         return;
        //     }
        //     return;
        // });

        //const img = request.file.filename;
        const { nome, descricao,tag,img } = request.body;
        const cursoExist = await cursosRepositories.findById(id);

        if(!cursoExist){
            return response.status(404).json({erro:"Curso não existe"})
        }

        const curso = await cursosRepositories.update(id,nome,descricao,tag,img);
        response.json(curso)

    }

    async addCursoFavoritos(request,response){
        const { idCurso, emailAluno } = request.params;
        await cursosRepositories.addCursoFavoritos(idCurso,emailAluno);  
        response.sendStatus(200);
    }

    async showAulas(request,response){
        const { id } = request.params;
        const aulas = await cursosRepositories.findAulasById(id);
        response.json(aulas)
    }
}

module.exports = new cursoController();