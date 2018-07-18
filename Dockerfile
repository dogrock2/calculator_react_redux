
FROM node:9

COPY ./build ./build
COPY ./src ./src
COPY ./css ./css
COPY ./server.js .
COPY ./package.json .
COPY ./index.html .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]