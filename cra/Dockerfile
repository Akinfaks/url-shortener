FROM node:14.15.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Tweet Sentiment Analysis frontend react app."
LABEL maintainer = ["danielmurph8@gmail.com", "dylanedwards290@gmail.com"]

RUN apt-get update

WORKDIR /app

COPY ./cra/ ./
ADD /cra/public public
ADD /cra/src src

COPY ["/cra/package.json", "/cra/yarn.lock", "./"]

COPY /cra/.env ./

RUN yarn

EXPOSE 3000
CMD ["yarn", "start"]