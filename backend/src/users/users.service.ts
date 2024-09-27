import { Injectable } from '@nestjs/common'; // Декоратор для создания инжектируемого сервиса.
import { InjectRepository } from '@nestjs/typeorm'; // Декоратор для внедрения репозитория TypeORM.
import { Repository } from 'typeorm'; // Репозиторий TypeORM для работы с базой данных.
import { User } from './users.entity'; // Импортируем сущность пользователя.

@Injectable() // Указываем, что этот класс — сервис.
export class UsersService {
  constructor(
    @InjectRepository(User) // Инжектируем репозиторий сущности пользователя.
    private usersRepository: Repository<User>, // Репозиторий для взаимодействия с таблицей пользователей.
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    // Ищем пользователя в базе данных по логину.
    const user = await this.usersRepository.findOneBy({ username });
    if (!user) {
      throw new Error('User not found'); // Обрабатываем ошибка если пользователя нет
    }
    return user;
  }

  async create(username: string, password: string): Promise<User> {
    // Создаём нового пользователя с заданным логином и паролем.
    const newUser = this.usersRepository.create({ username, password });
    // Сохраняем нового пользователя в базе данных.
    return this.usersRepository.save(newUser);
  }
}
