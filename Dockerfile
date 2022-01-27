FROM node:16.5.0 

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY . /usr/src/app/

RUN yarn install --frozen-lockfile

# build
RUN yarn build

CMD ["yarn", "start"]

