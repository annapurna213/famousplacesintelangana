import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdilabaddataComponent } from './adilabaddata.component';

describe('AdilabaddataComponent', () => {
  let component: AdilabaddataComponent;
  let fixture: ComponentFixture<AdilabaddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdilabaddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdilabaddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
