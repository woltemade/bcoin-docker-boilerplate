require("module-alias/register");
var express = require("express");
var router = express.Router();

const initBcoinNode = require("@/bcoin");

router.get("/", async function(req, res, next) {
    const watchid = "watchonly1";
    const account = "default";
    const pubkey = "0215a9110e2a9b293c332c28d69f88081aa2a949fde67e35a13fbe19410994ffd9";

    const bcoin = await initBcoinNode();
    const watchwallet = bcoin.walletClient.wallet(watchid);
    const result = await watchwallet.importPublic(account, pubkey);

    console.log(result);
    res.json(result);
});

module.exports = router;
