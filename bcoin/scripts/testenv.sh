#!/bin/bash


echo 'Testing ENV variable'
if $BCOIN_NETWORK = 'testnet'; then
    echo 'not starting miner on testnet'
else
    echo 'starting miner on regtest'
fi
echo 'Done'