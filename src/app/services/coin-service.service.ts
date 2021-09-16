import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { urlConfig } from 'src/config/url.config';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  public getCoinQuote(): Observable<any> {
    return this.httpClient.get<any>(
      `${urlConfig.GET_USD}/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL`,
      {
        observe: 'body',
      }
    );
  }

  // public getHtml(){
  //   return this.httpClient.get(`${urlConfig.COIN_MKT}`, {
  //     observe: 'body',
  //     responseType: 'text',
  //   });
  // }
}
