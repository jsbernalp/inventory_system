# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json
COPY package*.json ./
COPY wait-for-it.sh ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Da permisos de ejecución al script wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Compila el proyecto TypeScript
RUN npm run build

# Da permisos de ejecución al script (por seguridad y para asegurarse de que los permisos se configuren)
RUN chmod +x wait-for-it.sh

# Expone el puerto en el que la aplicación estará corriendo
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["./wait-for-it.sh", "${DB_HOST}:${DB_PORT}", "--", "npm", "run", "start"]