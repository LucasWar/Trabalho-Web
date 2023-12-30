const { response } = require("express");
const alunoRepositories = require("../repositories/alunoRepositories");


class alunoController{
    async index(request,response){
        const {orderBy, colum} = request.query;
        const alunos = await alunoRepositories.findAll(orderBy,colum);
        response.json(alunos);
    }

    async show(request,response){
        const { email } = request.params;
        const aluno = await alunoRepositories.findByEmail(email);
        if(!aluno){
            return response.status(404).json({error:"Aluno não encontrado"})
        }
        response.json(aluno)
    }

    async store(request,response){
        const { email,nome,senha } = request.body;
        const existEmail = await alunoRepositories.findByEmail(email);
        if(existEmail.length !== 0){
            return response.status(409).json({error:"Email ja cadastrado"})
            
        }
        const aluno = await alunoRepositories.create(email,nome,senha);
        response.json(aluno);
    }

    async delete(request,response){
        const { email } = request.params;
        const aluno = await alunoRepositories.findByEmail(email);
        if(aluno.length === 0){
            return response.status(404).json({error:"Aluno não encontrado"})
        }
        await alunoRepositories.delete(email,aluno.idFavoritos)
        response.sendStatus(204)
    }

    async update(request,response){
        const { email } = request.params;
        const { nome, senha } = request.body;
        const alunoExist = await alunoRepositories.findByEmail(email);

        if(!alunoExist){
            return response.status(404).json({erro:"Curso não existe"})
        }

        const aluno = await alunoRepositories.update(email,nome,senha);
        response.json(aluno)
   
    }
    
    async showFavoritos(request,response){
        const {email} = request.params;
        const favoritos = await alunoRepositories.findFavoritosByEmail(email);
        response.json(favoritos);
    }

    async login(request, response){
        const {email,senha} = request.body;
        const aluno = await alunoRepositories.verificLogin(email,senha);
        if(aluno.length === 0){
            response.status(404).json({Erro:"Email ou senha incorretos"})
        }
        response.json(aluno)
    }
}

module.exports = new alunoController();