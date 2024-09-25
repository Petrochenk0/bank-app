import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; // Импортируем декораторы для создания сущности.

@Entity() // Указываем, что это таблица базы данных.
export class User {
  @PrimaryGeneratedColumn() // Определяем, что это поле — автоинкрементируемый первичный ключ.
  id: number;

  @Column({ unique: true }) // Определяем колонку для логина, которая будет уникальной.
  username: string;

  @Column() // Определяем колонку для пароля (без дополнительных параметров).
  password: string;
}
