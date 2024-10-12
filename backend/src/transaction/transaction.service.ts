import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { BalanceDto } from '../balance/balance.dto';
import { User } from '../users/users.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // для работы с балансом пользователя
  ) {}

  // Изменим метод getBalance, чтобы искать по полю username, если userId отсутствует
  async getBalance(username: string): Promise<number> {
    const transactions = await this.transactionRepository.find({ where: { username } });

    return transactions.reduce((acc, transaction) => {
      const amount = transaction.amount ?? 0; // Заменим на 0, если amount undefined
      return transaction.type === 'deposit' ? acc + amount : acc - amount;
    }, 0);
  }

  async createTransaction(balanceDto: BalanceDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(balanceDto);
    return this.transactionRepository.save(transaction);
  }
}
