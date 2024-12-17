import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';

import { ExchangeService } from './exchange.service';
import { HttpService } from '../currency/http.service';

type ExchangeCurrenciesType = {
  sourceCurrencyCode: number;
  targetCurrencyCode: number;
  amount: number;
}

@Injectable()
export class CurrencyService {
  constructor(
    private exchangeService: ExchangeService,
    @Inject('CustomHttpService')
    private readonly httpService: HttpService,
  ) {}

  async fetchCurrencyRates() {
    try {
      const response = await this.httpService.get('https://api.monobank.ua/bank/currency');
      return response.data;
    } catch (err) {
      return null;
    }
  }

  async convert({
    sourceCurrencyCode,
    targetCurrencyCode,
    amount,
  }: ExchangeCurrenciesType) {
    const data = await this.fetchCurrencyRates();
    if (!data) {
      throw new BadRequestException('Exchange rates are not found. Try again later');
    }
    const response = this.exchangeService.convert(data, sourceCurrencyCode, targetCurrencyCode, amount);
    
    if (response === -1) {
      throw new NotFoundException('Exchange rate for such currencies is not available');
    }

    return { 
      success: true,
      response,
    };
  }
}
