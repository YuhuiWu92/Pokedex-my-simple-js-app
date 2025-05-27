# use nginx as basic image
FROM nginx:alpine

# delete default nginx page
RUN rm -rf /usr/share/nginx/html/*

# copy my project to nginx server directory
COPY . /usr/share/nginx/html

# public 80 port
EXPOSE 80
