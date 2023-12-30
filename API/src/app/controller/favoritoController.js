const { response } = require("express");
const favoritoRepositories = require("../repositories/favoritoRepositories.js");

class favoritosController{
    async removeCurso(request, response){
        const {emailAluno,idCurso} = request.params;
        await favoritoRepositories.removeCurso(emailAluno, idCurso);
        response.sendStatus(204)
    }

    async index(request,response){
        const favoritos = favoritoRepositories.findAll();
        response.json(favoritos);
    }

    async show(request,response){
        const {email} = request.params;
        const favoritos = await  favoritoRepositories.findByEmail(email);
        return favoritos;
    }
}

module.exports = new favoritosController();