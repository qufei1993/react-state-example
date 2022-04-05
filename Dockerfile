# Stage 1 - react build
FROM node:16.14.2 as react-build
WORKDIR /app
COPY ./package.json ./package.json
RUN yarn
COPY ./src ./src
COPY ./public ./public
RUN yarn build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
