import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyderabaddataComponent } from './hyderabaddata.component';

describe('HyderabaddataComponent', () => {
  let component: HyderabaddataComponent;
  let fixture: ComponentFixture<HyderabaddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyderabaddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyderabaddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
