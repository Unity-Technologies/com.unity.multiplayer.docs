# build environment
FROM node:current-alpine as build
WORKDIR /app
COPY . . 
RUN apk add --no-cache --quiet --no-progress git
RUN yarn install
RUN yarn build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
