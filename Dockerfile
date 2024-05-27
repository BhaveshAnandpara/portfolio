FROM node:14-alpine
WORKDIR /
RUN apk --no-cache add git
RUN git clone https://github.com/BhaveshAnandpara/portfolio.git
WORKDIR /portfolio
RUN npm install
EXPOSE 3000
CMD npm start
