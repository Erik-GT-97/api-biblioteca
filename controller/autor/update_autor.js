const AutorService = require("../../services/autor.services")
const { validateAutorUpdate } = require("../../validators/autor.validate")


module.exports = function (router){
    router.put('/:id', validateAutorUpdate, async (req,res)=> {
        const { body } = req
        const { id }  = req.params
        const autorService = new AutorService()

        try {
            const data = await autorService.updateAutor(id, {
                ...body,
                updated_at: new Date()
            })
            return res.status(200).json(data)
        }catch(err){

        }
    })
}