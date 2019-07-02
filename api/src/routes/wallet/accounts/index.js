const AccountsRouter = require("express").Router();

AccountsRouter.use("/list", require("./list")); // list all accounts of a wallet
AccountsRouter.use("/create", require("./create")); // create a new account

module.exports = AccountsRouter;