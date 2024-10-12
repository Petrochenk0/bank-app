import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceDto } from './balance.dto';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Post('transaction')
  createTransaction(@Body() balanceDto: BalanceDto) {
    return this.balanceService.createTransaction(balanceDto);
  }
}
