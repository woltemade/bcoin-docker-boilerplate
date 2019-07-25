const WalletRouter = require("express").Router();

WalletRouter.use("/create", require("./create")); // create a new wallet
WalletRouter.use("/list", require("./list")); // list all wallets being watched
WalletRouter.use("/add", require("./add")); // add a watch only wallet
WalletRouter.use("/info", require("./info")); // get wallet info
WalletRouter.use("/accounts", require("./accounts")); // list, add accounts for a wallet
WalletRouter.use("/inves", require("./inves")); // list, add accounts for a wallet

module.exports = WalletRouter;