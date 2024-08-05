ALTER USER 'root'@'%' IDENTIFIED BY 'password'; 
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '${DB_PASSWORD}';
FLUSH PRIVILEGES;
