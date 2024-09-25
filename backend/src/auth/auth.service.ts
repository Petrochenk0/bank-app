import { Injectable } from '@nestjs/common'; // Декоратор Injectable делает этот класс сервисом, который можно инжектировать.
import { JwtService } from '@nestjs/jwt'; // Импортируем сервис JWT для создания токенов.
import { UsersService } from '../users/users.service'; // Импортируем сервис пользователей для работы с данными пользователей.
import * as bcrypt from 'bcryptjs'; // Импортируем bcrypt для хеширования паролей.

@Injectable() // Указываем, что этот класс будет инжектируемым сервисом.
export class AuthService {
  constructor(
    private usersService: UsersService, // Инжектируем сервис пользователей.
    private jwtService: JwtService, // Инжектируем сервис JWT.
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Проверяем, существует ли пользователь с таким логином.
    const user = await this.usersService.findOne(username);
    // Если пользователь найден и его пароль соответствует введённому (сравниваем с хешем), возвращаем данные пользователя.
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user; // Убираем пароль из ответа.
      return result;
    }
    return null; // Если пользователь не найден или пароль неверен, возвращаем null.
  }

  async login(user: any) {
    // Подготавливаем данные для создания токена: логин пользователя и его id.
    const payload = { username: user.username, sub: user.id };
    // Возвращаем сгенерированный токен.
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(username: string, pass: string) {
    // Хешируем пароль с использованием bcrypt.
    const hashedPassword = await bcrypt.hash(pass, 10);
    // Создаём нового пользователя через сервис пользователей и сохраняем его в базе данных.
    return this.usersService.create(username, hashedPassword);
  }
}
