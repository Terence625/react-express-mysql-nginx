FROM node AS development
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
ENV REACT_APP_BACKEND_PORT=3001
CMD ["npm", "start"]

FROM development AS builder
RUN npm run build

FROM nginx AS production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf