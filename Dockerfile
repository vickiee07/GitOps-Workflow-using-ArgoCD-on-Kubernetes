
FROM node:18-alpine
WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm install
COPY app/ .
EXPOSE 80
CMD ["npm", "start"]
