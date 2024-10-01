import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceDto } from './balance.dto';

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':userId')
  getBalance(@Param('userId') userId: number) {
    return this.balanceService.getBalance(userId);
  }

  @Post('transaction')
  createTransaction(@Body() balanceDto: BalanceDto) {
    return this.balanceService.createTransaction(balanceDto);
  }
}
