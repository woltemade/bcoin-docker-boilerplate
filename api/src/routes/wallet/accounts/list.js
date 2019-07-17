require("module-alias/register");
var router = require("express").Router();

const initBcoinNode = require("@/bcoin");

router.get("/", async function(req, res, next) {
  const bcoin = await initBcoinNode();
  const accountId = req.query.accountId || "default";
  const wallet = bcoin.walletClient.wallet(accountId);
  const list = await wallet.getAccounts();
    console.log('accounts', list);
  // add and id to the results
  let results = [];
  if(list) {
    list.forEach((item, i) => {
        let wallet = {
          key: i + 1,
          value: item
        };
        results.push(wallet);
      });
  }
  res.status(200).json(results);
});

module.exports = router;
