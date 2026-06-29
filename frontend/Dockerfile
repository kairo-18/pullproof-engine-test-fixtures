FROM nginx:alpine
RUN apk add --no-cache gettext
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html.template
CMD ["/bin/sh", "-c", "envsubst '${REACT_APP_API_URL}' < /usr/share/nginx/html/index.html.template > /usr/share/nginx/html/index.html && exec nginx -g 'daemon off;'"]
