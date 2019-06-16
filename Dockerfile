FROM node:10

WORKDIR /build

COPY . .

RUN set -ex && \
  npm ci && \
  npm run build

FROM nginx:1.16.0-alpine

COPY --from=0 /build/public /usr/share/nginx/html
COPY --from=0 /build/packaging/site.conf /etc/nginx/conf.d/default.conf