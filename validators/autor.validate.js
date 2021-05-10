const errorResponse = require('../utils/errorResponse')
const { AutorCreate, AutorUpdate }  = require('./model_request/autor')

const validateAutorCreate = async (req, res, next) => {
     try{
            await AutorCreate.validateAsync(req.body)
     }catch (err){
         console.log(err)
         return res.status(400).json(await errorResponse(err))
     }
     next()
}

const validateAutorUpdate = async (req, res, next) => {
    try{
        await AutorUpdate.validateAsync(req.body)
    }catch (err){
        console.log(err)
        return res.status(400).json(await errorResponse(err))
    }
    next()
}

module.exports = {
    validateAutorCreate,
    validateAutorUpdate
}