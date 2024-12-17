import { Module } from '@nestjs/common';

import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { ExchangeService } from './exchange.service';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService, ExchangeService],
})
export class CurrencyModule {}
