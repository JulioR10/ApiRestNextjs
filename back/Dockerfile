# back/Dockerfile
FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

CMD ["node", "index.js"]
