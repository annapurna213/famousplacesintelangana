import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalgondaComponent } from './nalgonda.component';

describe('NalgondaComponent', () => {
  let component: NalgondaComponent;
  let fixture: ComponentFixture<NalgondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalgondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NalgondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
