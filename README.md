#   docker-compose react boilerplate

## Goal:

To run a full node and query the bitcoin blockchain

## Usage:

Setup:

```bash
mv env.sample .env
```

To begin development:

```
docker-compose up --build
```

## Info

The Docker containers are located in the ./docker folder. They spin up an API, APP, bcoin Node respectively


## Todo:

1) Clean environment variables
2) get nodemon to watch changes in containers 
3) Remove dependencies on bash scripts by adding that functionality it to the Dockerfiles
4) Write tests
5) Test mainnet implementation
6)

