FROM node:16-alpine
WORKDIR /sleorpels
COPY . .
RUN yarn install --production && yarn build
CMD ["npm", "start"]
EXPOSE 1337
