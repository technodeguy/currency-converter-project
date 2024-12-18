import { Body, Controller, HttpCode, Post, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';

import { CurrencyService } from './currency.service';
import { ExchangeCurrenciesDto } from './dto';

@UseInterceptors(CacheInterceptor)
@Controller('/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @HttpCode(201)
  @Post('/')
  convert(@Body() payload: ExchangeCurrenciesDto) {
    return this.currencyService.convert(payload);
  }
}
