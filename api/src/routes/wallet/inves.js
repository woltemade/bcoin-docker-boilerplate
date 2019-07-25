require('module-alias/register')
var router = require('express').Router();

const initBcoinNode = require('@/bcoin')

function emptyVal(val) {
    if (!val || val.trim() === '') {
        return true;
    }
}
router.get('/', async function(req, res, next) {
    const bcoin = await initBcoinNode()
    let errMessage = 'No error';
    const walletId = req.query.walletId || 'wa'; // inves user id 
    const accountId = req.query.accountId; // user can have more than one wallet, name must be unique
    const publicKey = req.query.publicKey || 'te'; //we need to check that it is not already added
    // 1. check that all values are supplied
    if (emptyVal(accountId)) {
        errMessage = 'AccountId must be supplied.';
        res.status(301).json({walletIfno: errMessage});
    }
    if (emptyVal(walletId)) {
        errMessage = 'WalletId must be supplied.';
        res.status(301).json({walletIfno: errMessage});
    }
    if (emptyVal(publicKey)) {
        errMessage = 'PublicKey must be supplied.';
        res.status(301).json({walletIfno: errMessage});
    }
    // 2. check if user wallet exists
    // 3. List accounts and check if public key is already added
    // 4. Check that account id is not already in use.
    // const wallet = await bcoin.walletClient.wallet(walletId);
    // const walletIfno = await wallet.getInfo();
    res.status(200).json({walletIfno: errMessage});
});

module.exports = router;



