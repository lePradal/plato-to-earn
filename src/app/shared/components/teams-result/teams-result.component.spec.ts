import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsResultComponent } from './teams-result.component';

describe('TeamsResultComponent', () => {
  let component: TeamsResultComponent;
  let fixture: ComponentFixture<TeamsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
