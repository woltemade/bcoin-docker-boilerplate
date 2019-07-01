const WalletRouter = require("express").Router();

WalletRouter.use("/list", require("./list"));
WalletRouter.use("/addWatchWallet", require("./addWatchWallet"));
module.exports = WalletRouter;