const autorRouter = require("../autor")

module.exports = function registerRouter (app) {
    app.use('/autor', autorRouter)
}