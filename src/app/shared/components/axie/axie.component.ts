import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { NgxSpinnerService } from 'ngx-spinner';
import { interval, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { CoinService } from 'src/app/services/coin-service.service';
import { slp } from 'src/config/slp.config';
import { AxieResults } from './../../models/axie.results';

@Component({
  selector: 'app-axie',
  templateUrl: './axie.component.html',
  styleUrls: ['./axie.component.css']
})
export class AxieComponent implements OnInit, OnDestroy {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  public dolarInterval: Subscription = new Subscription();
  public slpInterval: Subscription = new Subscription();

  public slp = slp;
  public slpForm: FormGroup;

  public dolarQuote: number;
  public slpQuote: number;

  public results: AxieResults[];

  public dolarDone: boolean;
  public slpDone: boolean;


  constructor(
    private coinService: CoinService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
  ) {

    this.dolarQuote = 0;
    this.slpQuote = 0;
    this.dolarDone = false;
    this.slpDone = false;

    this.slpForm = this.formBuilder.group({
      trophiesRangeIndex: [0, [Validators.required, Validators.min(0), Validators.max(14)]],
      pvpWins: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
      slpInDolars: [0.0800, [Validators.required, Validators.min(0.00001)]],
      dolarQuote: [5, [Validators.required, Validators.min(0.01)]],
    });

    this.results = [];
  }

  public ngOnInit(): void {

    this.spinner.show();

    this.dolarInterval = interval(5000).pipe(
      startWith(0),
      switchMap(() => this.quoteDolar())
    ).subscribe({
      error: (response) => {
        console.error(response);
        this.slpForm.patchValue({'dolarQuote': 5});
      },      
      next: (response) => {
        this.slpForm.patchValue({dolarQuote: response.USDBRL.ask});
        this.dolarQuote = response.USDBRL.ask;

        this.dolarDone = true;

        if (/*this.slpDone &&*/ this.dolarDone) {
          this.calculate();
          this.spinner.hide();
        }
      }
    });

    // this.slpInterval = interval(5000).pipe(
    //   startWith(0),
    //   switchMap(() => this.quoteSLP())
    // ).subscribe({
    //   error: (response) => {
    //     console.error(response);
    //     this.slpForm.patchValue({'slpInDolars': 5});
    //   },      
    //   next: (response) => {     
    //     let slpInReais = Number(response.split('class="priceValue ">R$')[1].split('</div')[0]); 
    //     this.slpForm.patchValue({slpInDolars: (slpInReais / this.dolarQuote).toFixed(5)  });
    //     this.slpQuote = slpInReais / this.dolarQuote;

    //     this.slpDone = true;


    //     if (this.slpDone && this.dolarDone) {
    //       this.calculate();
    //       this.spinner.hide();
    //     }
    //   }
    // });

    this.slpForm.valueChanges.subscribe({
      next: (changes) => {
        this.calculate();
      }
    });
  }

  public calculate() {
    if (this.slpForm.invalid) {
      return;
    }
    
    const dolar = this.dolarQuote;
    // const slpInDolars = this.slpQuote;
    const slpInDolars = this.slpForm.get('slpInDolars')?.value;
    const pvpWins = this.slpForm.get('pvpWins')?.value;
    const range = this.slpForm.get('trophiesRangeIndex')?.value;

    const baseDailySLP = slp.daily;

    this.results = [
      {
        title: "Dia",
        slp: baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ),
        dolar: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars,
        real: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars * dolar,
      },
      {
        title: "Semana",
        slp: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * 7,
        dolar: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars * 7,
        real: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars * dolar * 7,
      },
      {
        title: "Quinzena",
        slp: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * 15,
        dolar: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars * 15,
        real: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars * dolar * 15,
      },
      {
        title: "Mês (30 dias)",
        slp: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * 30,
        dolar: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars * 30,
        real: ( baseDailySLP + ( pvpWins * slp.ranges[range].slpRewards ) ) * slpInDolars * dolar * 30,
      },
    ]
  }

  public quoteDolar() {
    return this.coinService.getCoinQuote()
  }

  // public quoteSLP() {
  //   return this.coinService.getHtml()
  // }

  public ngOnDestroy() {
    this.slpForm.reset();
  }

}