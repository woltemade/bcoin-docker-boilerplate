#!/bin/bash

# copy the node and wallet config files
cp -R /code/conf/. ~/.bcoin/

# Run the mine script in the background regtest only
if $BCOIN_NETWORK = 'regtest'; then
    echo 'Launching mine on regtest'
    /code/scripts/mine.sh
fi


# Start the bcoin node
echo 'Start bcoin node on ' $BCOIN_NETWORK
node /code/bcoin/bin/node --network=$BCOIN_NETWORK