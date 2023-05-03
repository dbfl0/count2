Speed test 16


Docker was
FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 3000
CMD ["npm", "start"]
