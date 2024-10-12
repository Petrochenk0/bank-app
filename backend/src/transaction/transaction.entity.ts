import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username?: string;

  @Column()
  amount?: number;

  @Column()
  type?: 'deposit' | 'withdraw' | 'buy';

  @Column({ default: 'USD' })
  currency!: string;
}
