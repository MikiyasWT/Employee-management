FROM node:16

# app directory
WORKDIR /app

# Install app dependencies
# ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install 

# Bundle app source
COPY . /app

EXPOSE 8080


ENV PORT=8080


CMD ["npm","start"]







