# build environment
FROM node:current as build

ARG GITHUB_ACCESS_TOKEN

WORKDIR /app
COPY . .

# Authenticating with GitHub using the GITHUB_ACCESS_TOKEN environment variable
RUN test -n "$GITHUB_ACCESS_TOKEN"
RUN git config --global --add url."https://x-access-token:$GITHUB_ACCESS_TOKEN@github.com".insteadOf "ssh://git@github.com"

RUN yarn install
RUN yarn build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
