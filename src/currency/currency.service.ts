import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

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
    @Inject('CACHE_MANAGER')
    private readonly cacheService: Cache,
    private configService: ConfigService
  ) {}

  async fetchCurrencyRates() {
    try {
      const response = await this.httpService.get(this.configService.get('monobankApiUrl'));
      return response.data;
    } catch (err) {
      return null;
    }
  }

  async retrieveRatesFromStorage() {
    const cachedRates = await this.cacheService.get('rates');

    if (!cachedRates) {
      const rates = await this.fetchCurrencyRates();
      if (!rates) {
        throw new BadRequestException('Exchange rates are not found. Try again later');
      }
      await this.cacheService.set('rates', rates);
      return rates;
    }

    return cachedRates;
  }

  async convert({
    sourceCurrencyCode,
    targetCurrencyCode,
    amount,
  }: ExchangeCurrenciesType) {

    const data = await this.retrieveRatesFromStorage();

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
