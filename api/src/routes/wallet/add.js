require("module-alias/register");
var router = require("express").Router();

const initBcoinNode = require("@/bcoin");

router.get("/", async (req, res, next) => {
  try {
    if(!req.query.walletId || !req.query.pubKey) {
      throw new error('walletId, or Public key missing.')
    }
    let options = {
      walletId: req.query.walletId,
      accountId: req.query.accountId || "default",
      passphrase: req.query.passphrase || '',
      pubKey: req.query.pubKey
    };
    console.log(JSON.stringify(options, null, 4));
    const bcoin = await initBcoinNode();
    const watchwallet = bcoin.walletClient.wallet(options.walletId);
    console.log(JSON.stringify(watchwallet, null, 4))
    const result = await watchwallet.importPublic(
      options.accountId,
      options.pubKey
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(301).json({ error: result });
    }
  } catch (e) {
    console.log("error in wallet add:", JSON.stringify(e, null, 4));
    res.status(301).json(e);
  }
});

module.exports = router;
