# Copied from https://github.com/bcoin-org/bcoin-docker
FROM node:8-slim

ENV BCOIN_REPO=https://github.com/bcoin-org/bcoin.git \
    BCOIN_DIR=/code/bcoin

RUN apt-get update \
  && apt-get install -y build-essential git make python \
  && mkdir -p $BCOIN_DIR /data \
  && git clone $BCOIN_REPO $BCOIN_DIR \
  && cd $BCOIN_DIR \
  && git checkout tags/v1.0.2  \
  && npm install --production \
  && npm uninstall node-gyp \
  && apt-get remove -y build-essential make python git \
  && apt-get autoremove -y

WORKDIR $BCOIN_DIR

COPY ./scripts/ /code/scripts
ADD ./conf/ /code/conf/

RUN chmod +x /code/scripts/launch.sh
RUN chmod +x /code/scripts/mine.sh
RUN chmod +x /code/scripts/testenv.sh

CMD ["/code/scripts/launch.sh"]
