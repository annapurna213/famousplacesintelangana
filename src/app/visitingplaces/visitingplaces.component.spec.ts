import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingplacesComponent } from './visitingplaces.component';

describe('VisitingplacesComponent', () => {
  let component: VisitingplacesComponent;
  let fixture: ComponentFixture<VisitingplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitingplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitingplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
