FROM node:14.15.0

LABEL version="1.0"
LABEL description="This is the base docker image for the url-shortener frontend react app."
LABEL maintainer = ["akinfaks@yahoo.com"]

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