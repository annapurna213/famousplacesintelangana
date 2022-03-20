import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TELANGANAComponent } from './telangana.component';

describe('TELANGANAComponent', () => {
  let component: TELANGANAComponent;
  let fixture: ComponentFixture<TELANGANAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TELANGANAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TELANGANAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
