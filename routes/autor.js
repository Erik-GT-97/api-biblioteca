const express = require('express')
const autorRouter = express.Router()

const create_autor = require('../controller/autor/create_autor')
const delete_autor = require('../controller/autor/delete_autor')
const list_autors = require('../controller/autor/list_autors')
const update_autor = require('../controller/autor/update_autor')

create_autor(autorRouter)
delete_autor(autorRouter)
list_autors(autorRouter)
update_autor(autorRouter)

module.exports = autorRouter