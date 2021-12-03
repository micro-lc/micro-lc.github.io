FROM nginx:1.21-alpine as build

LABEL name="micro-lc-documentation" \
      description="Documentation of micro-lc project" \
      eu.mia-platform.url="https://www.mia-platform.eu" \
      eu.mia-platform.version="0.5.0"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "micro-lc-documentation: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./build .

USER nginx
