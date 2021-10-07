FROM node:14.15.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Tweet Sentiment Analysis backend API."
LABEL maintainer = ["danielmurph8@gmail.com", "dylanedwards290@gmail.com"]

RUN apt-get update

# TODO VOLUME /tmp
WORKDIR /app
COPY ./api/ .  
ADD /api/controller controller
ADD /api/router router
ADD /api/tests tests
ADD /api/.babelrc ./
ADD /api/.dockerignore ./
ADD /api/index.js ./
ADD /api/jest.config.json ./
ADD /api/nodemon.json ./
ADD /api/utils.js ./


COPY /api/package.json ./
COPY /api/yarn.lock ./
COPY /api/.env ./

RUN yarn
EXPOSE 8000
CMD [ "yarn", "run", "dev" ]
