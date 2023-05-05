# Build
FROM node:alpine as builder

WORKDIR ./home/socialfeed

COPY . .

RUN npm install

RUN npm run build

# NGINX
FROM nginx:alpine

# Remove default nginx static assets
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# Copy from build stage
COPY --from=builder /home/socialfeed/build .

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]