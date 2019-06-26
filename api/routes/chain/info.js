require('module-alias/register')
var express = require('express');
var router = express.Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
  const bcoin = await initBcoinNode()
  const info = await bcoin.nodeClient.getInfo();
  console.log(info, "tester nodemon");
  res.json(info);
});

module.exports = router;
