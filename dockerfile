FROM alpine

WORKDIR /dir

COPY root.js .

COPY . .

RUN apk add --update nodejs npm 

RUN npm install express


CMD node root.js