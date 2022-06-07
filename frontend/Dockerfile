FROM node AS development
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM development AS builder
RUN npm run build

FROM nginx AS production
COPY --from=builder /app/build /usr/share/nginx/html