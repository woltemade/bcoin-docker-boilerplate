const AccountsRouter = require("express").Router();

AccountsRouter.use("/list", require("./list")); // list all accounts of a wallet
AccountsRouter.use("/info", require("./info")); // get account info
AccountsRouter.use("/create", require("./create")); // create a new account
AccountsRouter.use("/getreceiveaddress", require("./getReceiveAddress")); // create a new account

module.exports = AccountsRouter;