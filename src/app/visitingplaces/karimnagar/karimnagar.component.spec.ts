import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarimnagarComponent } from './karimnagar.component';

describe('KarimnagarComponent', () => {
  let component: KarimnagarComponent;
  let fixture: ComponentFixture<KarimnagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarimnagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarimnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
