require("module-alias/register");
var router = require("express").Router();

const initBcoinNode = require("@/bcoin");

router.get("/", async (req, res, next) => {
    try {
        let options = {
            name: req.query.name || "account2",
            type: req.query.type || "multisig",
            passphrase: req.query.passphrase || ""
        };
        const bcoin = await initBcoinNode();
        const watchwallet = bcoin.walletClient.wallet("wallet2");

        const result = await watchwallet.createAccount(options.name, options);

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(301).json({error: result});
        }
        
    } catch(e) {
        console.log("error in add:", e, JSON.stringify(e, null, 4));
        res.status(301).json(e)
    }
});

module.exports = router;

//curl http://x:secretpw@localhost:48332 -X POST --data '{ "method": "generate", "params": [ '1' ]}'