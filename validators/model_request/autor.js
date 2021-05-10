const Joi = require('joi')

const AutorCreate = Joi.object().keys({
    first_name : Joi.string()
                    .min(1)
                    .max(255)
                    .required(),
    last_name: Joi.string()
                  .min(1)
                  .max(255)
                  .required()
})

const AutorUpdate = Joi.object().keys({
    first_name: Joi.string()
                   .min(1)
                   .max(255),
    last_name: Joi.string()
                  .min(1)
                  .max(255)
})

module.exports = {
    AutorCreate,
    AutorUpdate
}