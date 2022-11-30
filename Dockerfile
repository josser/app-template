# syntax=docker/dockerfile:1

FROM node:lts-alpine as proddeps
USER node:node

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node ["package.json", "package-lock.json", "tsconfig.json", "./"]

RUN npm set progress=false && npm config set depth 0 && npm config set update-notifier false
RUN npm install --omit=dev

FROM proddeps as appbuild
# install ALL node_modules, including 'devDependencies'
RUN npm install
COPY --chown=node ["src", "./"]
# build app
RUN npm run build

FROM proddeps
COPY --from=appbuild /home/node/app/dist /home/node/app/dist
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/index.js"]
