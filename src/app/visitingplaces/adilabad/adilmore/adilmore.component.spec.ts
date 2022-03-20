import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdilmoreComponent } from './adilmore.component';

describe('AdilmoreComponent', () => {
  let component: AdilmoreComponent;
  let fixture: ComponentFixture<AdilmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdilmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdilmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
