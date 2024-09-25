FROM postgres:17-alpine  

ENV POSTGRES_USER=postgres  
ENV POSTGRES_PASSWORD=54321
ENV POSTGRES_DB=authpersons 

EXPOSE 5432

ENV podman-compose build  
ENV podman-compose up


# Используем Node.js образ
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Компилируем TypeScript
RUN npm run build

# Открываем порт
EXPOSE 3000

# Запускаем сервер
CMD ["npm", "run", "start"]
