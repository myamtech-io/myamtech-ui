FROM node:10

RUN set -ex && \
    curl --silent -L -O https://dl.min.io/client/mc/release/linux-amd64/mc && \
    chmod a+x mc && \
    mv mc /usr/bin
