ALTER USER 'root'@'localhost' IDENTIFIED BY 'password'; 
ALTER USER '${DB_USERNAME}'@'${DB_HOST}' IDENTIFIED WITH mysql_native_password BY '${DB_PASSWORD}';
FLUSH PRIVILEGES;
