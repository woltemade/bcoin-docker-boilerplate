const ChainRouter = require("express").Router();

ChainRouter.use("/info", require("./info"));
ChainRouter.use("/mine", require("./mine"));

module.exports = ChainRouter;