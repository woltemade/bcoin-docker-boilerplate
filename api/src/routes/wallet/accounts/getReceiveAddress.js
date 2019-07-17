require('module-alias/register')
var router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode();
    const accountId = req.query.accountId || 'primary';
    const wallet = bcoin.walletClient.wallet(accountId);
    const result = await wallet.createAddress(accountId);
    
    res.status(200).json(result);
});

module.exports = router;
//
