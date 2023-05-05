FROM node:alpine

WORKDIR ./home/socialfeed

COPY . .

RUN npm install

CMD ["npm", "start"]