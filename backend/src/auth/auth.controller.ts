import { Body, Controller, Post } from '@nestjs/common'; // Импортируем необходимые декораторы.
import { AuthService } from './auth.service'; // Импортируем сервис аутентификации.
import { User } from '../users/users.entity'; // Импортируем сущность пользователя.

@Controller('auth') // Определяем маршрут для аутентификации.
export class AuthController {
  constructor(private readonly authService: AuthService) {} // Инжектируем AuthService.

  @Post('login') // Определяем метод для логина.
  async login(@Body() req: { username: string; password: string }) {
    // Указываем тип параметра req.
    return this.authService.validateUser(req.username, req.password); // Вызываем метод в AuthService для валидации пользователя.
  }

  @Post('register') // Определяем метод для регистрации.
  async register(@Body() req: { username: string; password: string }) {
    // Указываем тип параметра req.
    return this.authService.register(req.username, req.password); // Вызываем метод в AuthService для регистрации пользователя.
  }
}
