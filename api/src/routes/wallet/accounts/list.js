require('module-alias/register')
var router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode();
    const wallet = bcoin.walletClient.wallet("account2");
    const list = await wallet.getAccounts();
    res.status(200).json(list);
});

module.exports = router;