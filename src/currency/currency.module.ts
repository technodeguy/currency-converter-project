import { Module } from '@nestjs/common';

import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { ExchangeService } from './exchange.service';
import { HttpModule } from './http.module';

@Module({
  imports: [
    HttpModule.forFeature({
      serviceName: 'CustomHttpService',
      config: {
        baseURL: 'https://api.monobank.ua/bank/currency',
        enableLogging: true,
      },
    }),
  ],
  controllers: [CurrencyController],
  providers: [CurrencyService, ExchangeService],
})
export class CurrencyModule {}
