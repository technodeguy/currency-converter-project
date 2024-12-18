import { IsNotEmpty, IsNumber } from 'class-validator';

export class ExchangeCurrenciesDto {
  @IsNotEmpty()
  @IsNumber()
  readonly sourceCurrencyCode: number;

  @IsNotEmpty()
  @IsNumber()
  readonly targetCurrencyCode: number;

  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;
}
