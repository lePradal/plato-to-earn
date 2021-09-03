import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoinQuote } from '../shared/models/coin-quote.response';
import { urlConfig } from 'src/config/url.config';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private httpClient: HttpClient) { }

  public getCoinQuote(): Observable<any> {
    return this.httpClient.get<any>(
      `${urlConfig.GET_USD}/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL`,
      {
        observe: 'body',
      }
    );
  }
}
