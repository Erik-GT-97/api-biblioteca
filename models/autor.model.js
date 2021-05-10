const mongoose = require('mongoose')

const autorSchema = mongoose.Schema({
    first_name: {
        type: String,
        minlength: 1,
        maxlength: 255,
        required: [true, 'El nombre es requerido']
    },
    last_name: {
        type: String,
        minlength: 1,
        maxlength: 255,
        required: [true, 'El apellido es requerido']
    },
    deleted: {
        type: Boolean,
        default : false
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
})

const autorModel = mongoose.model('autors', autorSchema)

module.exports = autorModel