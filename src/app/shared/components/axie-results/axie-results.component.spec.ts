import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxieResultsComponent } from './axie-results.component';

describe('AxieResultsComponent', () => {
  let component: AxieResultsComponent;
  let fixture: ComponentFixture<AxieResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxieResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxieResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
