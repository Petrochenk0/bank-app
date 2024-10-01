import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceDto } from './balance.dto';

@Controller('api/balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get(':username')
  async getBalanceAndHistory(@Param('username') username: string) {
    return this.balanceService.getBalanceAndHistory(username);
  }

  @Post('transaction')
  async updateBalance(@Body() balanceDto: BalanceDto) {
    return this.balanceService.createTransaction(balanceDto);
  }
}
