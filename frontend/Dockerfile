# Dockerfile
FROM node:boron

# Set environment variables
ENV appDir /app

# Initiate project folders
RUN mkdir -p /app

#WORKDIR ${appDir}
WORKDIR /app

COPY ./package.json /app/package.json

COPY ./.next /app/.next

RUN npm install
