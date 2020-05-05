# FROM node
#
# ENV PORT=4200 \
#   NODE_ENV=production
#
# # 安装express和angular/cli
# RUN npm update
# RUN npm init -y
# RUN npm install --save-prod express \
#   && npm install --save-prod @angular/cli
# # 创建app目录
# RUN mkdir -p /app
# # 复制代码到 App 目录
# COPY . /app
# WORKDIR /app
#
# # 安装依赖,构建程序,这里由于我需要反向代理到子目录，所以添加了base-href参数 --base-href /manage/ && ng build --prod
# RUN npm install
#
# EXPOSE ${PORT}
#
# ENTRYPOINT ["node", "/app/server.js"]

FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install -y nodejs npm
RUN mkdir /app
WORKDIR /app
RUN npm init -y
RUN npm install --save express
RUN npm install --save @angular/cli
COPY . /server
RUN nom install
EXPOSE 4200
ENTRYPOINT ["node", "/app/server.js"]