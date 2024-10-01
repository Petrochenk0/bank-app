import { IsNumber, IsEnum } from 'class-validator';

export class BalanceDto {
  @IsNumber()
  amount?: number; // Сумма транзакции

  @IsEnum(['deposit', 'withdraw'])
  type?: 'deposit' | 'withdraw'; // Тип транзакции
}
