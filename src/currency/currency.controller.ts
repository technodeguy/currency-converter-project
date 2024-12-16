import { Controller, Post } from '@nestjs/common';

import { CurrencyService } from './currency.service';

@Controller('/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post('/')
  convert(): string {
    return this.currencyService.convert();
  }
}
