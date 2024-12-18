import { Injectable } from '@nestjs/common';

export interface IExchangeRate {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy?: number;
  rateSell?: number;
  rateCross?: number;
}

@Injectable()
export class ExchangeService {
  convert(
    exchangeRates: IExchangeRate[],
    sourceCurrencyCode: number,
    targetCurrencyCode: number,
    amount: number,
  ) {
    for (const rate of exchangeRates) {
      if (
        rate.currencyCodeA === sourceCurrencyCode &&
        rate.currencyCodeB === targetCurrencyCode
      ) {
        return amount * (rate.rateBuy || rate.rateCross);
      } else if (
        rate.currencyCodeA === targetCurrencyCode &&
        rate.currencyCodeB === sourceCurrencyCode
      ) {
        return amount / (rate.rateSell || rate.rateCross);
      }
    }
    return -1;
  }
}
