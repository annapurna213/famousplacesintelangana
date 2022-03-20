import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adilabaddata1Component } from './adilabaddata1.component';

describe('Adilabaddata1Component', () => {
  let component: Adilabaddata1Component;
  let fixture: ComponentFixture<Adilabaddata1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adilabaddata1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adilabaddata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
