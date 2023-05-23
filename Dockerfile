# Build
FROM node:alpine as builder

WORKDIR /app

COPY package*.json .

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# NGINX
FROM nginx:alpine

# Remove default nginx static assets
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# Copy from build stage
COPY --from=builder /app/build .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]