require('module-alias/register')
const router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const options = {
        blocks: parseInt(req.query.blocks) || 50,
        address: req.query.address || 'coinbaseaddress'
    }
    try {
        console.log('mine to address:', options.blocks, options.address);
        const bcoin = await initBcoinNode()
        const result = await bcoin.nodeClient.execute('generatetoaddress', [ options.blocks, options.address ]);
        res.status(200).json(result);
    }
    catch(e) {
        res.status(300).json(e);
    }
});

module.exports = router;