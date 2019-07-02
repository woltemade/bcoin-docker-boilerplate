require("module-alias/register");
var router = require("express").Router();

const initBcoinNode = require("@/bcoin");

router.get("/", async (req, res, next) => {
  try {
    let options = {
      walletId: req.query.walletId || "account2",
      accountId: req.query.accountId || "default",
      pubKey:
        pubKey ||
        "0215a9110e2a9b293c332c28d69f88081aa2a949fde67e35a13fbe19410994ffd9"
    };
    const bcoin = await initBcoinNode();
    const watchwallet = bcoin.walletClient.wallet(options.walletId);
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
    res.status(301).json({ e });
  }
});

module.exports = router;
