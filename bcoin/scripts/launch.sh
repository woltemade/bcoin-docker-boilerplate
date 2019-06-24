#!/bin/bash

# copy the node and wallet config files
cp -R /code/conf/. ~/.bcoin/

# Run the mine script in the background
echo 'Launching mine'
/code/scripts/mine.sh &

# Start the bcoin node
node /code/bcoin/bin/node --network=regtest