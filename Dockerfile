# build environment
FROM node:current as build
WORKDIR /app
COPY . . 
RUN yarn install
RUN yarn build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
