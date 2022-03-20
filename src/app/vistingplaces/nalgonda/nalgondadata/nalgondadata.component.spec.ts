import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalgondadataComponent } from './nalgondadata.component';

describe('NalgondadataComponent', () => {
  let component: NalgondadataComponent;
  let fixture: ComponentFixture<NalgondadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NalgondadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NalgondadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
