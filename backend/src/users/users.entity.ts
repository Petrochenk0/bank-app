import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Указываем, что это сущность базы данных
export class User {
  @PrimaryGeneratedColumn() // Автоматическая генерация ID
  id?: number; // Сделано необязательным

  @Column() // Столбец для хранения имени пользователя
  username?: string; // Сделано необязательным

  @Column() // Столбец для хранения пароля
  password?: string; // Сделано необязательным
}
