import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdilabadComponent } from './adilabad.component';

describe('AdilabadComponent', () => {
  let component: AdilabadComponent;
  let fixture: ComponentFixture<AdilabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdilabadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdilabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
