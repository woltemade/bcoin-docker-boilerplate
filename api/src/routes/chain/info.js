require('module-alias/register')
const express = require('express');
const router = express.Router();

const initBcoinNode = require('@/bcoin')

router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode()
    const info = await bcoin.nodeClient.getInfo();
    res.status(200).json(info);
});

module.exports = router;
