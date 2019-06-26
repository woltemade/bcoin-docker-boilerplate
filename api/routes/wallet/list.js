const {WalletClient} = require('bclient');
const {Network} = require('bcoin');
const network = Network.get('regtest');

const walletOptions = {
  network: network.type,
  port: network.walletPort,
  apiKey: 'api-key'
}
//
const walletClient = new WalletClient(walletOptions);

(async () => {
  const result = await walletClient.getWallets();
  console.log(result);

  //
})();