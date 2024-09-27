import { Module } from '@nestjs/common'; // Импортируем декоратор Module для создания модуля.
import { AuthService } from './auth.service'; // Импортируем сервис авторизации.
import { AuthController } from './auth.controller'; // Импортируем контроллер авторизации.
import { JwtModule } from '@nestjs/jwt'; // Импортируем модуль JWT для создания и проверки токенов.
import { PassportModule } from '@nestjs/passport'; // Импортируем модуль Passport для обработки стратегии авторизации.
import { JwtStrategy } from './jwt.strategy'; // Импортируем стратегию для работы с JWT.
import { UsersModule } from '../users/users.module'; // Импортируем модуль для работы с пользователями.
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Делает ConfigModule доступным глобально по всему приложению
    }),
    UsersModule, // Подключаем модуль пользователей для работы с базой данных пользователей.
    PassportModule, // Подключаем Passport для авторизации.
    JwtModule.register({
      secret: 'yourSecretKey', // Указываем секретный ключ для подписи JWT токенов.
      signOptions: { expiresIn: '1h' }, // Настраиваем токен так, чтобы он действовал 1 час.
    }),
  ],
  providers: [AuthService, JwtStrategy], // Определяем сервис авторизации и стратегию JWT как провайдеры.
  controllers: [AuthController], // Указываем контроллер, который будет обрабатывать запросы на авторизацию.
})
export class AuthModule {} // Экспортируем модуль авторизации.
