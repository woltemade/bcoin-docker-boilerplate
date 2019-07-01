const ChainRouter = require("express").Router();

ChainRouter.use("/info", require("./info"));

module.exports = ChainRouter;