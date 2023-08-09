FROM mongo
COPY init-script.sh /docker-entrypoint-initdb.d/init-script.sh
COPY mongodb-data /makeup-data
RUN chmod +x /docker-entrypoint-initdb.d/init-script.sh