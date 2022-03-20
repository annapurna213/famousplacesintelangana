import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahabubnagarComponent } from './mahabubnagar.component';

describe('MahabubnagarComponent', () => {
  let component: MahabubnagarComponent;
  let fixture: ComponentFixture<MahabubnagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahabubnagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahabubnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
