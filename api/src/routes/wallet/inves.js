require("module-alias/register");
const uuidv4 = require("uuid/v4");
const router = require("express").Router();

const initBcoinNode = require("@/bcoin");

function emptyVal(val) {
  if (!val || val.trim() === "") {
    return true;
  }
}

router.get("/", async function(req, res, next) {
  try {
    const bcoin = await initBcoinNode();
    let errMessage = "No error";

    const publicKey = req.query.xpub; //we need to check that it is not already added
    const walletId = uuidv4();
    const accountId = "default";

    if (emptyVal(publicKey)) {
      errMessage = "PublicKey must be supplied.";
      res.status(301).json({ walletInfo: errMessage });
    }

    let options = {
      walletId: walletId,
      accountId: accountId,
      watchOnly: req.query.watchOnly || true,
      accountKey: publicKey
    };

    const result = await bcoin.walletClient.createWallet(
      options.walletId,
      options
    );
    if (result) {
      res.status(200).json(result);
    } else {
      console.log(
        "error in wallet create response:",
        JSON.stringify(result, null, 4)
      );
      res.status(301).json({ error: result });
    }
  } catch (e) {
    res.status(301).json(e);
  }
  // 2. check if user wallet exists
  // 3. List accounts and check if public key is already added
  // 4. Check that account id is not already in use.
  // const wallet = await bcoin.walletClient.wallet(walletId);
  // const walletInfo = await wallet.getInfo();
  //
});

module.exports = router;
