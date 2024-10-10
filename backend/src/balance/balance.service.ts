import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { BalanceDto } from './balance.dto';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async getBalanceAndHistory(username: string) {
    const transactions = await this.transactionRepository.find({ where: { username } });
    const balance =
      transactions.length > 0
        ? transactions.reduce((acc, tx) => {
            const amount = tx && tx.amount !== undefined ? tx.amount : 0;
            return acc + (tx?.type === 'deposit' ? amount : -amount);
          }, 0)
        : 0;
    return { balance, history: transactions };
  }

  async createTransaction(balanceDto: BalanceDto) {
    const transaction = this.transactionRepository.create(balanceDto);
    await this.transactionRepository.save(transaction);
    return transaction; // Возвращаем созданную транзакцию
  }

  async getTransactionHistory(username: string) {
    return await this.transactionRepository.find({ where: { username } });
  }
}
