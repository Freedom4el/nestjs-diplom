FROM node:16-alpine

WORKDIR /app

COPY ["./package*", "/app"]

RUN npm install
COPY . /app
RUN npm run build

CMD ["npm", "start"]