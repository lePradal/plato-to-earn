import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin-service.service';
import { Coin } from '../../models/coin-quote.response';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public coins: Coin[] = [];

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.coinService.getCoinQuote().subscribe({
      error: (error) => {
        console.error(error);
      },
      next: (response) => {
        this.coins = [];
        for (let prop in response) {
          this.coins.push(response[prop])
        }
      }
    });
  }

}
