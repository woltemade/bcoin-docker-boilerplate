
require("module-alias/register");
var router = require("express").Router();

const initBcoinNode = require("@/bcoin");

router.get("/", async (req, res, next) => {
  try {
    let options = {
        walletId: req.query.walletId,
        passphrase: req.query.passphrase || '',
        // witness: req.query.witness || false,
        watchOnly: req.query.watchOnly || true,
        // accountKey: req.query.accountKey || 'rpubKBAoFrCN1HzSEDye7jcQaycA8L7MjFGmJD1uuvUZ21d9srAmAxmB7o1tCZRyXmTRuy5ZDQDV6uxtcxfHAadNFtdK7J6RV9QTcHTCEoY5FtQD'
    };
    const bcoin = await initBcoinNode();
    const result = await bcoin.walletClient.createWallet(options.walletId, options);
    if (result) {
      res.status(200).json(result);
    } else {
      console.log("error in wallet create response:", JSON.stringify(result, null, 4));
      res.status(301).json({ error: result });
    }
  } catch(e) {
    console.log("error in wallet create:", e, "ebefore", JSON.stringify(e, null, 4));
    res.status(301).json(e);
  }
});

module.exports = router;