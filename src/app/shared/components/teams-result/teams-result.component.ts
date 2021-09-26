import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-teams-result',
  templateUrl: './teams-result.component.html',
  styleUrls: ['./teams-result.component.css']
})
export class TeamsResultComponent implements OnInit {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() numberOfTeams: number = 2;
  @Input() playersForTeam: number = 2;
  @Input() closeBtnText: string = '';
  @Input() submitBtnText: string = '';
  @Input() players: string[] = [];

  public teams: string[][] = [];

  public getTeamInterval: Subscription = new Subscription();

  @Output() event = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {

    this.getTeamInterval = interval(500).subscribe({
      error: (response) => {
        console.error(response);
      },      
      next: (response) => {
        this.getTeams();
      }
    });
  }

  public eventEmit(event: Event) {
    this.event.emit();
  }

  public shufflePlayers() {
    this.players = this.shuffle(this.players);
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

      const team = this.players.slice(begin, end);

      this.teams.push(team);
    }
  }
}
