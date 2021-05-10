const path = require('path')

const translationDir = path.resolve('.') + '/utils/locale'
const locales = ['es']
const domain = 'message'

module.exports = {
    translationDir,
    locales,
    domain
}