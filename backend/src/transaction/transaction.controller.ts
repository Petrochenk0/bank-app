import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BalanceService } from '../balance/balance.service';
import { BalanceDto } from '../balance/balance.dto';
import { TransactionService } from '../transaction/transaction.service';

@Controller('balance')
export class BalanceController {
  constructor(
    private readonly balanceService: BalanceService,
    private readonly transactionService: TransactionService,
  ) {}

  @Get(':userId')
  getBalance(@Param('userId') userId: number) {
    return this.transactionService.getBalance(userId);
  }
}
