import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
  convert(): string {
    return 'Currency was converted successfully';
  }
}
