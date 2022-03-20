import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NizamabadComponent } from './nizamabad.component';

describe('NizamabadComponent', () => {
  let component: NizamabadComponent;
  let fixture: ComponentFixture<NizamabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NizamabadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NizamabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
