FROM node:20-alpine
WORKDIR /app
COPY /api/package*.json /app
RUN npm install --omit=dev
COPY ./api /app
EXPOSE 3000
CMD ["npm", "start"]