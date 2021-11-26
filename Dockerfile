FROM node:16.13

WORKDIR /site

COPY ["package.json", "package-lock.json*", "yarn.lock", "./"]

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]