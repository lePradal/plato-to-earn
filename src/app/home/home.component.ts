import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mine, mines } from 'src/config/mines.config';
import { CoinService } from '../services/coin-service.service';
import { Coin, CoinQuote } from '../shared/models/coin-quote.response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dolarQuote: number;
  public coins: Coin[] = []

  constructor(private coinService: CoinService) {
    this.dolarQuote = 0.0;
  }

  public ngOnInit(): void {
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
