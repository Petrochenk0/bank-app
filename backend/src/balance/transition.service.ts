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

  async getBalance(userId: number): Promise<number> {
    const transactions = await this.transactionRepository.find({ where: { userId } });
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'deposit' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);
  }

  async getBalanceAndHistory(username: string) {
    const transactions = await this.transactionRepository.find({ where: { username } });
    const balance =
      transactions.length > 0
        ? transactions.reduce(
            (acc, tx) => acc + (tx?.type === 'deposit' ? tx.amount : -tx.amount),
            0,
          )
        : 0;
    return { balance, history: transactions };
  }

  async createTransaction(balanceDto: BalanceDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(balanceDto);
    return this.transactionRepository.save(transaction);
  }
}
