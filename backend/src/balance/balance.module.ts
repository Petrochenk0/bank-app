import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import { Transaction } from './transaction.entity'; // Импортируем сущность транзакции

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])], // Подключаем сущность к модулю
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class BalanceModule {}
