#  bcoin docker-compose react boilerplate

### Goal:

To run a full node and query the bitcoin blockchain

### Usage:

Setup:

```bash
mv env.sample .env
```

To begin development:

```
docker-compose up --build
```

### Info

The Docker containers are located in the ./docker folder. They spin up an API, APP, bcoin Node respectively


### Todo:

<s>1) Create test wallets through interface and API</s>

<s>2) Mine bitcoin to them (regtest only), send bitcoin between wallets for testing</s>

3) Add these created wallets as watch wallets, test that these wallets are being watched

4) Create cron job or (node plus sqs-consumer) and Lambda to poll for new x-pub keys

5) Create lambda and db or message queue to store x-pubs submitted by user for adding or removal in watch only wallet list

6) Write tests

7) Test mainnet implementation

8) Make docker-compose depend on API ready checks, which will allow the syncing of the blockchain before the API is available.

9) Remove dependencies on bash scripts by adding that functionality it to the Dockerfiles

<s>10) preserve regtest, testnet, mainnet data in docker containers</s>