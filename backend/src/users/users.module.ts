import { Module } from '@nestjs/common'; // Импортируем декоратор для создания модуля.
import { UsersService } from './users.service'; // Импортируем сервис пользователей.
import { TypeOrmModule } from '@nestjs/typeorm'; // Импортируем модуль TypeORM для работы с базой данных.
import { User } from './users.entity'; // Импортируем сущность пользователя, которая представляет таблицу в базе данных.

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Подключаем сущность User к TypeORM, чтобы он мог работать с таблицей.
  providers: [UsersService], // Определяем сервис пользователей как провайдер.
  exports: [UsersService], // Экспортируем сервис, чтобы его можно было использовать в других модулях (например, в AuthModule).
})
export class UsersModule {} // Экспортируем модуль пользователей.
