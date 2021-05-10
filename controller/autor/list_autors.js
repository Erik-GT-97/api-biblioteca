const AutorService = require('../../services/autor.services')

module.exports = function (router) {

    router.get('/', async (req,res) => {
        const autorService = new AutorService()
        const data = await autorService.getAutors()
        return res.status(200).json(data)
    })
    
}