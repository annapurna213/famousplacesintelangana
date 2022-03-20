import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adilabaddata2Component } from './adilabaddata2.component';

describe('Adilabaddata2Component', () => {
  let component: Adilabaddata2Component;
  let fixture: ComponentFixture<Adilabaddata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adilabaddata2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adilabaddata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
