import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Разрешаем запросы с фронтенда на порт 3000
    credentials: true, // Разрешаем отправку куки и заголовков авторизации
  });
  await app.listen(3001); // Сервер будет слушать на порту 3001
  console.log('Backend is running on http://localhost:3001');
}
bootstrap();
