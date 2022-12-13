FROM node:16.15.1-buster-slim

WORKDIR /usr/app

EXPOSE 8000
EXPOSE 3000

COPY --chown=node:node . .

RUN cd psyderella-backend && npm ci && npm run build --if-present
RUN cd psyderella-frontend && npm ci && npm run build 

RUN npm install --global serve

CMD cd psyderella-backend && node index.js & cd psyderella-frontend && serve -p 3000 ./build