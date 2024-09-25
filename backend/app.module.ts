import { Module } from '@nestjs/common'; // Импортируем декоратор для создания модуля.
import { TypeOrmModule } from '@nestjs/typeorm'; // Импортируем модуль TypeORM для работы с базой данных.
import { AuthModule } from './src/auth/auth.module'; // Импортируем модуль авторизации.
import { UsersModule } from './src/users/users.module'; // Импортируем модуль пользователей.

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Настраиваем подключение к базе данных PostgreSQL.
      type: 'postgres', // Указываем тип базы данных — PostgreSQL.
      host: 'localhost', // Адрес сервера базы данных.
      port: 5432, // Порт PostgreSQL (стандартный порт).
      username: 'postgres', // Имя пользователя для подключения к базе.
      password: '54321', // Пароль для подключения к базе.
      database: 'aythpersons', // Название базы данных.
      autoLoadEntities: true, // Автоматически загружать сущности.
      synchronize: true, // Автоматически синхронизировать схему базы данных (для разработки).
    }),
    AuthModule, // Подключаем модуль авторизации.
    UsersModule, // Подключаем модуль пользователей.
  ],
})
export class AppModule {} // Экспортируем главный модуль приложения.
