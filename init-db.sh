#!/bin/bash

# Reemplaza las variables de entorno en el archivo init.sql y guarda el resultado en un nuevo archivo
envsubst < /docker-entrypoint-initdb.d/init.sql > /docker-entrypoint-initdb.d/init.sql

# Ejecuta el comando de inicialización original
/docker-entrypoint.sh mysqld

