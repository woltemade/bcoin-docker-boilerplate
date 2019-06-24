require('module-alias/register')

const config = require('@/config')
const usecase = require('@/ucs')
const initBcoin = require('@/bcoin')

const start = async () => {
  const bcoin = await initBcoin()

  // const ucs = new usecase(bcoin.nodeClient, bcoin.walletClient)

  // await ucs.listen()
  // await ucs.rescanIfEnvPassed()
  // console.log(`receive address created ${JSON.stringify(await ucs.genAddress(), null, 4)}`)

  // await ucs.test()
  console.log(await bcoin.nodeClient.getInfo())
  console.log('finished getting info.')

  //loop through wallets to get balance

//   const walletClient = new WalletClient(walletOptions);
// const wallet = walletClient.wallet(id);

// (async () => {
//   const result = await wallet.getInfo();
//   console.log(result);
// })();

//loop through wallet accounts to list them
// const walletClient = new WalletClient(walletOptions);
// const wallet = walletClient.wallet(id);

// (async () => {
//   const result = await wallet.getAccounts();
//   console.log(result);
// })();

}

start()