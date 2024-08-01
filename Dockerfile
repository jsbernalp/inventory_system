# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila el proyecto TypeScript
RUN npm run build

# Expone el puerto en el que la aplicación estará corriendo
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "npm", "run" ,"dev", "start" ]
