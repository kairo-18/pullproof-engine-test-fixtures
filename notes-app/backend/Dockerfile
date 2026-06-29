FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY package.json ./
RUN npm install
COPY src/ ./src/
EXPOSE 4000
CMD ["node", "src/server.js"]
