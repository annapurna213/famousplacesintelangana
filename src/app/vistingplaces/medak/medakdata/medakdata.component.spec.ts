import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedakdataComponent } from './medakdata.component';

describe('MedakdataComponent', () => {
  let component: MedakdataComponent;
  let fixture: ComponentFixture<MedakdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedakdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedakdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
