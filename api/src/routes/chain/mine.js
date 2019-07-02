require('module-alias/register')
const router = require('express').Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const options = {
        numBlocks: req.query.numBlocks || 50,
        address: req.query.numBlocks || 'coinbaseaddress'
    }
    try {
        const bcoin = await initBcoinNode()
        const result = await bcoin.nodeClient.execute('generatetoaddress', [ options.numblocks, options.address ]);
        res.status(200).json(result);
    }
    catch(e) {
        res.status(300).json(e);
    }
});

module.exports = router;