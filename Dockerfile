FROM node:12.18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY storychain/package.json /app/.
# COPY tsconfig.json /app/.
COPY storychain/yarn.lock /app/.
RUN yarn install