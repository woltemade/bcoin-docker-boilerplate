require('module-alias/register')
var router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode()
    const walletId = req.query.walletId || 'primary';
    
    const wallet = await bcoin.walletClient.wallet(walletId);
    res.status(200).json(wallet);
});

module.exports = router;



