FROM node:latest

WORKDIR /app

COPY package*.json .
RUN npm install --force

COPY . .

WORKDIR /app/src/BackEnd/Server

EXPOSE 8000

CMD ["node", "Server.cjs"]