FROM nginx

COPY dist/mep-front /usr/share/nginx/html

EXPOSE 80
