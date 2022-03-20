import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarangaldataComponent } from './warangaldata.component';

describe('WarangaldataComponent', () => {
  let component: WarangaldataComponent;
  let fixture: ComponentFixture<WarangaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarangaldataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarangaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
