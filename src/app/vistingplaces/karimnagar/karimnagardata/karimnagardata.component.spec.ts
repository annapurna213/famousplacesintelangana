import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarimnagardataComponent } from './karimnagardata.component';

describe('KarimnagardataComponent', () => {
  let component: KarimnagardataComponent;
  let fixture: ComponentFixture<KarimnagardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarimnagardataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarimnagardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
