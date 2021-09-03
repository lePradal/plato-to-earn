import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmComputingComponent } from './farm-computing.component';

describe('FarmComputingComponent', () => {
  let component: FarmComputingComponent;
  let fixture: ComponentFixture<FarmComputingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmComputingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmComputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
