# build environment
FROM node:current as build

WORKDIR /app
COPY . .

# Fetch the Github Personal Access Token from the .npmrc authentication and configure Git for the build
RUN grep "//npm.pkg.github.com/:_authToken=" .npmrc | \
    awk '{split($0,a,"="); print a[2]}' | xargs -I {} \
    git config --global --add url."https://x-access-token:{}@github.com".insteadOf "ssh://git@github.com"

RUN yarn install
RUN yarn build


# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
