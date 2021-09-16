import { Component, Input, OnInit } from '@angular/core';
import { Mir4Result } from '../../models/mir4.results';

@Component({
  selector: 'app-mir4results',
  templateUrl: './mir4results.component.html',
  styleUrls: ['./mir4results.component.css']
})
export class Mir4ResultsComponent implements OnInit {

  @Input() formValid: boolean;
  @Input() results: Mir4Result[];

  constructor() {
    this.formValid = false;
    this.results = [];
  }

  ngOnInit(): void {
  }

}
