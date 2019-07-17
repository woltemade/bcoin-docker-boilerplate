require('module-alias/register')
var router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode()
    const walletId = req.query.walletId || 'primary';
    const accountId = req.query.accountId || 'default';
    const wallet = await bcoin.walletClient.wallet(walletId);
    const result = await wallet.getAccount(accountId);
    res.status(200).json(result);
});

module.exports = router;



