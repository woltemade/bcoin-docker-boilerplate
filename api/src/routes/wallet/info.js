require('module-alias/register')
var router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode()
    let walletId = req.query.walletId || 'primary2';
    if (walletId === 'watchOn') {
        walletId = 'watchOnly'
    }

    const wallet = await bcoin.walletClient.wallet(walletId);
    const walletIfno = await wallet.getInfo();
    res.status(200).json(walletIfno);
});

module.exports = router;



