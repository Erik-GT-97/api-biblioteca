const path = require('path')

const { translationDir, locales, domain} = require('../config/translations')

function translator(message){
    let response = message
    for (const locale of locales){
        const fileName = `${domain}.js`
        const translationsFilePath = path.join(translationDir, locale, fileName)
        const { translations } = require(translationsFilePath)
        if (message in translations) {
            response = translations[message]
        }
    }
    return response 
}

module.exports = translator