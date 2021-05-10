const AutorService = require("../../services/autor.services")
const { validateAutorCreate } = require("../../validators/autor.validate")

module.exports = function (router) {

    router.post('/',  validateAutorCreate , async (req, res) => {
        const { body } = req
        const autorService = new AutorService()
     try{
        const data = await autorService.createAutor({
            ...body,
            created_at: new Date()
        })
        return res.status(200).json(data)
     }catch(err){

     }
        
    })  
}