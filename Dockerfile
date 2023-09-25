FROM node:20-alpine
WORKDIR /sleorpels
COPY . .
RUN npm install --production && npm run build
CMD ["npm", "start"]
EXPOSE 1337

# docker build -t sleorpels .

# docker tag sleorpels sabbirsobhani/sleorpels

# docker push sabbirsobhani/sleorpels