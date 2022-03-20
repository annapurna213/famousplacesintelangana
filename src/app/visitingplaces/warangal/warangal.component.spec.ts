import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarangalComponent } from './warangal.component';

describe('WarangalComponent', () => {
  let component: WarangalComponent;
  let fixture: ComponentFixture<WarangalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarangalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarangalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
