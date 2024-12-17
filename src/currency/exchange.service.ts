import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
  convert(
    exchangeRates: any,
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
