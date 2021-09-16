import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mir4ResultsComponent } from './mir4results.component';

describe('ResultsComponent', () => {
  let component: Mir4ResultsComponent;
  let fixture: ComponentFixture<Mir4ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mir4ResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mir4ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
