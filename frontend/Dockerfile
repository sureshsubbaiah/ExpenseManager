# base image
FROM node:12.2.0-alpine

# install and cache app dependencies
COPY . /expense-manager-react-app
# set working directory
WORKDIR /expense-manager-react-app
RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]