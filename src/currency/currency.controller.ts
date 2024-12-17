import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CurrencyService } from './currency.service';
import { ExchangeCurrenciesDto } from './dto';

@Controller('/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @HttpCode(201)
  @Post('/')
  convert(@Body() payload: ExchangeCurrenciesDto) {
    return this.currencyService.convert(payload);
  }
}
