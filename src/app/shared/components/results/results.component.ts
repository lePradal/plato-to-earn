import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() formValid: boolean;
  @Input() results: Result[];

  constructor() {
    this.formValid = false;
    this.results = [];
  }

  ngOnInit(): void {
  }

}
