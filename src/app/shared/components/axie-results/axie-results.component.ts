import { AxieResults } from './../../models/axie.results';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-axie-results',
  templateUrl: './axie-results.component.html',
  styleUrls: ['./axie-results.component.css']
})
export class AxieResultsComponent implements OnInit {

  @Input() formValid: boolean;
  @Input() results: AxieResults[];

  constructor() {
    this.formValid = false;
    this.results = [];
  }

  ngOnInit(): void {
  }

}
