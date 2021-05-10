const AutorService = require("../../services/autor.services")

module.exports = function (router) {
    router.delete('/:id', async (req, res) => {
        const autorService = new AutorService()
        const {id} = req.params
        try {
            const data = await autorService.updateAutor(id, {
                deleted: true,
                updated_at: new Date()
            })        
            return res.status(200).json(data)  
        }catch (err){
            
        }
    })
}