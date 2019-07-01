
module.exports = function(app) {
    app.use("/wallet", require("./wallet"));
    app.use("/chain", require("./chain"));
}
