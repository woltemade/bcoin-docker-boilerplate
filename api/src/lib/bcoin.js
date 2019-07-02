const bcoin = require('bcoin')
const { NodeClient, WalletClient } = require('bclient')

const config = require('@/config')

module.exports = async () => {
  const network = bcoin.Network.get(config.bcoin.network)

  const clientOptions = {
    network: network.type,
    port: network.rpcPort,
    host: config.bcoin.host,
    apiKey: config.bcoin.apiKey,
  }
  const walletOptions = {
    network: network.type,
    port: network.walletPort,
    host: config.bcoin.host,
    apiKey: config.bcoin.apiKey,
  }

  // console.log("walletOptions:", JSON.stringify(walletOptions, null, 4));
  // console.log("clientOptions:", JSON.stringify(clientOptions, null, 4));

  const nodeClient = new NodeClient(clientOptions)
  const walletClient = new WalletClient(walletOptions)

  return {
    nodeClient: nodeClient,
    walletClient: walletClient,
  }
}
