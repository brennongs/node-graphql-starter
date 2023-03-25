FROM node:fermium-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm i --silent && npm i pm2 -g

EXPOSE 3000

COPY dist dist

CMD ["pm2-runtime", "./dist/src/index.js"]