import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BesttimetovisitComponent } from './besttimetovisit.component';

describe('BesttimetovisitComponent', () => {
  let component: BesttimetovisitComponent;
  let fixture: ComponentFixture<BesttimetovisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BesttimetovisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BesttimetovisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
