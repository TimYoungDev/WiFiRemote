FROM node:20-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build --prod

FROM nginx:1.25-alpine as server
COPY --from=build /dist/wifi-remote/browser /usr/share/nginx/html
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
