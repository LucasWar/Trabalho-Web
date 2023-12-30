const { response } = require("express");
const aulaRepositories = require("../repositories/aulaRepositories");


class aulaController{
    async index(request,response){
        const aulas = await aulaRepositories.findAll();
        response.json(aulas);
    }

    async show(request,response){
        const { id } = request.params;
        const aula = await aulaRepositories.findById(id);
        if(!aula){
            return response.status(404).json({error:"Aula não encontrada"})
        }
        response.json(aula)
    }

    async store(request,response){
        const { idCurso,nome,link } = request.body;
        const existAula = await aulaRepositories.findByLink(link);
        if(existAula.length !== 0){
            return response.status(409).json({error:"Aula ja cadastrada"})
        }
        const aula = await aulaRepositories.create(idCurso,nome,link);
        response.json(aula);
    }

    async delete(request,response){
        const { id } = request.params;
        const aula = await aulaRepositories.findById(id);
        if(aula.length === 0){
            return response.status(404).json({error:"Aula não encontrado"})
        }
        await aulaRepositories.delete(id)
        response.sendStatus(204)
    }

    async update(request,response){
        const { id } = request.params;
        const { idCurso, nome, link } = request.body;
        const aulaExist = await aulaRepositories.findById(id);

        if(!aulaExist){
            return response.status(404).json({erro:"Aula não existe"})
        }

        const aula = await aulaRepositories.update(id,idCurso, nome, link);
        response.json(aula)
   
    }
}

module.exports = new aulaController();