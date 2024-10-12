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

  async getBalance(username: string): Promise<number> {
    const transactions = await this.transactionRepository.find({ where: { username } });

    return transactions.reduce((acc, transaction) => {
      const amount = transaction.amount ?? 0;
      return transaction.type === 'deposit' ? acc + amount : acc - amount;
    }, 0);
  }

  async createTransaction(balanceDto: BalanceDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(balanceDto);
    return this.transactionRepository.save(transaction);
  }
}
