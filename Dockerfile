FROM node:latest
RUN mkdir -p /scan
#WORKDIR /egg
#COPY . /egg
#RUN yarn run build
#RUN yarn global add serve
RUN apt update &&  apt install vim lsof -y
WORKDIR /scan
COPY . /scan
RUN npm install
#CMD ["npm", "run-script", "build"]
CMD ["yarn", "start"]
EXPOSE 7010
##ENTRYPOINT "./randomEgg.sh"
