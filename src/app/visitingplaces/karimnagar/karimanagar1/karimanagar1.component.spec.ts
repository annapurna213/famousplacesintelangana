import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Karimanagar1Component } from './karimanagar1.component';

describe('Karimanagar1Component', () => {
  let component: Karimanagar1Component;
  let fixture: ComponentFixture<Karimanagar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Karimanagar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Karimanagar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
