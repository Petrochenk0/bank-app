import { Controller, Post, Body } from '@nestjs/common'; // Импортируем декораторы для создания контроллера и обработки POST запросов.
import { AuthService } from './auth.service'; // Импортируем сервис авторизации.

@Controller('auth') // Создаём контроллер для обработки запросов на маршрут '/auth'.
export class AuthController {
  constructor(private authService: AuthService) {} // Инжектируем сервис авторизации.

  @Post('login') // Обрабатываем POST запрос на '/auth/login'.
  async login(@Body() req) {
    // Принимаем тело запроса (логин и пароль) и передаём в сервис авторизации для проверки и генерации токена.
    return this.authService.login(req);
  }

  @Post('register') // Обрабатываем POST запрос на '/auth/register'.
  async register(@Body() req) {
    // Принимаем логин и пароль, передаём их в сервис для регистрации нового пользователя.
    return this.authService.register(req.username, req.password);
  }
}
