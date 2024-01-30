# base image
FROM node:16

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src
RUN npm install -g npm@10.2.0
# copy source files
COPY . /usr/src

COPY package*.json ./
COPY prisma ./prisma/


RUN apt-get -qy update && apt-get -qy install openssl

# install dependencies
RUN npm install --force

COPY . .
RUN npx prisma generate --schema ./prisma/schema.prisma


EXPOSE 3030

CMD ["npm", "run", "start:prod"]