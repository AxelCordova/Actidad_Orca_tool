FROM node:20.9.0

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Se expone el puerto 8000
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
