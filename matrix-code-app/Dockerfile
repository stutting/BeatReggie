# @codex:task Create a lightweight container for serving static files
FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
