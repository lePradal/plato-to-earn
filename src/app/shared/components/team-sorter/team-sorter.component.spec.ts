import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSorterComponent } from './team-sorter.component';

describe('TeamSorterComponent', () => {
  let component: TeamSorterComponent;
  let fixture: ComponentFixture<TeamSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSorterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
