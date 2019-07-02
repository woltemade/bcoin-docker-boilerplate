require('module-alias/register')
var router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode()
    const list = await bcoin.walletClient.getWallets();
    res.status(200).json(list);
});

module.exports = router;