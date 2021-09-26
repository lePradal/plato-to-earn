import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-sorter',
  templateUrl: './team-sorter.component.html',
  styleUrls: ['./team-sorter.component.css']
})
export class TeamSorterComponent implements OnInit {

  public controlForm: FormGroup;
  public rows: number;
  public suficientPlayers: boolean;
  public playersList: string[];
  public numberOfTeams: number;
  public playersForTeam: number;
  public teams: string[][] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.rows = 2;
    this.suficientPlayers = false;
    this.playersList = [];
    this.numberOfTeams = 2;
    this.playersForTeam = 2;

    this.controlForm = this.formBuilder.group({
      numberOfTeams: [2, [Validators.required, Validators.min(2)]],
      playersForTeam: [2, [Validators.required, Validators.min(2)]],
      text: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.controlForm.valueChanges.subscribe({
      next: (changes) => {

        this.numberOfTeams = Number(this.controlForm.get('numberOfTeams')?.value);
        this.playersForTeam = Number(this.controlForm.get('playersForTeam')?.value);

        this.playersList = this.controlForm.get('text')?.value.split(/[\r\n]+/);

        this.playersList.forEach((player) => {
          player = player.replace(/ /g, '');
        });

        this.rows = (this.numberOfTeams * this.playersForTeam);
        this.suficientPlayers = this.playersList.length >= (this.numberOfTeams * this.playersForTeam);
      }
    });
  }

  public playersNamesIsValid() {
    let result = true;
    for (let player of this.playersList) {
      if (player == '' || player == ' ' || player == undefined || player == null) {
        result = false;
      }
    }

    return result;
  }

  public shuffle(array: string[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  public getTeams() {
    this.teams = [];
    for (let i = 0; i < this.numberOfTeams; i++) {
      const begin = (i * this.numberOfTeams * this.playersForTeam) / this.numberOfTeams;
      const end = ((i + 1) * this.playersForTeam);

      const team = this.playersList.slice(begin, end);

      this.teams.push(team);
    }
  }

  public shufflePlayers() {
    this.playersList = this.shuffle(this.playersList);
    this.getTeams();
  }



}
