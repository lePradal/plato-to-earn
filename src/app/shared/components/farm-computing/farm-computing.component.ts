import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Observable, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { CoinService } from 'src/app/services/coin-service.service';
import { mines } from 'src/config/mines.config';

@Component({
  selector: 'app-farm-computing',
  templateUrl: './farm-computing.component.html',
  styleUrls: ['./farm-computing.component.css']
})
export class FarmComputingComponent implements OnInit, OnDestroy {

  public timeInterval: Subscription = new Subscription();

  public mines = mines;
  public farmForm: FormGroup;

  public averageDS: number;
  public hoursPerDay: number;
  public characters: number;
  public daysPerMonth: number;
  public darkSteel: number;
  public draco: number;
  public dolar: number;
  public real: number;
  public boost: number;

  public dolarQuoteOberservable: Observable<number>;

  public results: Result[] = [];

  constructor(
    private coinService: CoinService,
    private formBuilder: FormBuilder
  ) {

    this.dolarQuoteOberservable = new Observable();

    this.farmForm = this.formBuilder.group({
      mineNumber: [0, Validators.required],
      farmHoursPerDay: [1, [Validators.required, Validators.min(1), Validators.max(24)]],
      farmDaysPerMonth: [1, [Validators.required, Validators.min(1), Validators.max(31)]],
      numberOfChars: [1, [Validators.required, Validators.min(1), Validators.max(100)]],
      dracoInDolars: [1, [Validators.required, Validators.min(0.00001)]],
      dolarQuote: [5, [Validators.required, Validators.min(0.01)]],
      boostPercent: [0, [Validators.required]],
    });
    
    this.averageDS = 0;
    this.hoursPerDay = 0;
    this.characters = 0;
    this.daysPerMonth = 0;
    this.darkSteel = 0;
    this.draco = 0;
    this.dolar = 0;
    this.real = 0;
    this.boost = 1;
  }

  public ngOnInit(): void {

    this.timeInterval = interval(10000).pipe(
      startWith(0),
      switchMap(() => this.quoteDolar())
    ).subscribe({
      error: (response) => {
        console.error(response);
        this.farmForm.patchValue({'dolarQuote': 5});

        this.calculate();
      },      
      next: (response) => {
        console.log('http');
        this.farmForm.patchValue({dolarQuote: response.USDBRL.ask});

        this.calculate();
      }
    });

    this.farmForm.valueChanges.subscribe({
      next: (changes) => {
        this.calculate();
      }
    });
  }



  public calculate() {
    if (this.farmForm.invalid) {
      return;
    }
    
    this.averageDS = mines[this.farmForm.get('mineNumber')?.value].averageDS;
    this.hoursPerDay = this.farmForm.get('farmHoursPerDay')?.value;
    this.characters = this.farmForm.get('numberOfChars')?.value;
    this.daysPerMonth = this.farmForm.get('farmDaysPerMonth')?.value;
    this.boost = 1 + (this.farmForm.get('boostPercent')?.value / 100);

    this.darkSteel = this.averageDS * 6 * 60 * this.hoursPerDay * this.characters * this.boost;
    this.draco = this.darkSteel / 100000;
    this.dolar = this.draco * this.farmForm.get('dracoInDolars')?.value;
    this.real = this.dolar * this.farmForm.get('dolarQuote')?.value;

    this.results = [];
    this.results.push({
      title: 'Dia',
      darkSteel: this.darkSteel,
      draco: this.draco,
      dolar: this.dolar,
      real: this.real,
    });

    if (this.daysPerMonth >= 7) {
      this.results.push({
        title: 'Semana',
        darkSteel: this.daysPerMonth >= 7 ? this.darkSteel * 7 : 0,
        draco: this.daysPerMonth >= 7 ? this.draco * 7 : 0,
        dolar: this.daysPerMonth >= 7 ? this.dolar * 7 : 0,
        real: this.daysPerMonth >= 7 ? this.real * 7 : 0,
      });
    }

    if (this.daysPerMonth > 7) {
      this.results.push({
        title: 'Mês',
        darkSteel: this.darkSteel * this.daysPerMonth,
        draco: this.draco * this.daysPerMonth,
        dolar: this.dolar * this.daysPerMonth,
        real: this.real * this.daysPerMonth,
      });
    }
  }

  public quoteDolar() {
    return this.coinService.getCoinQuote()
  }

  public ngOnDestroy() {
    this.farmForm.reset();
  }

}

interface Result {
  title: string,
  darkSteel: number,
  draco: number,
  dolar: number,
  real: number,
}

