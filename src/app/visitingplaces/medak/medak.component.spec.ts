import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedakComponent } from './medak.component';

describe('MedakComponent', () => {
  let component: MedakComponent;
  let fixture: ComponentFixture<MedakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
