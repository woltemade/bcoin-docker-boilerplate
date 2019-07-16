require("module-alias/register");
var router = require("express").Router();

const initBcoinNode = require("@/bcoin");

router.get("/", async function(req, res, next) {
  const bcoin = await initBcoinNode();
  const list = await bcoin.walletClient.getWallets();
  // add and id to the results
  let results = [];
  list.forEach((item, i) => {
    let wallet = {
      key: i + 1,
      value: item
    };
    results.push(wallet);
  });
  res.status(200).json(results);
});

module.exports = router;
