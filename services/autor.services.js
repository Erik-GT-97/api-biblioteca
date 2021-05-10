const Autor =  require('../models/autor.model')

class AutorService {
    constructor(){}

    async getAutors(){
        return Autor.find({
            deleted : false
        })
    }

    async createAutor(autor){
        return new Autor(autor).save()
    }

    async updateAutor(id, body){
        return Autor.findByIdAndUpdate(id,body, {
            new: true
        })
    }
}

module.exports = AutorService