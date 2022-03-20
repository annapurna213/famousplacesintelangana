import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NizamabaddataComponent } from './nizamabaddata.component';

describe('NizamabaddataComponent', () => {
  let component: NizamabaddataComponent;
  let fixture: ComponentFixture<NizamabaddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NizamabaddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NizamabaddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
