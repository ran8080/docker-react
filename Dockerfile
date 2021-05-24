FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build -- the built app would be there
# Default command for nginx image, will run it (so no need to explicitly put it)
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
