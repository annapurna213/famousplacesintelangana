import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahabubnagardataComponent } from './mahabubnagardata.component';

describe('MahabubnagardataComponent', () => {
  let component: MahabubnagardataComponent;
  let fixture: ComponentFixture<MahabubnagardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahabubnagardataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahabubnagardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
