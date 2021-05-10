const translator = require('./get_text')

function formatError(code){
    return code.replace(/['"]+/g,'')
}

module.exports = async function error_response(error){
    // console.log(translator(formatError(error.details[0].message)))
    const errorMessage = {
        message: translator(formatError(error.details[0].message)),
        code: error.details[0].path.join('_')
    }
    return errorMessage
}