import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedstudentComponent } from './acceptedstudent.component';

describe('AcceptedstudentComponent', () => {
  let component: AcceptedstudentComponent;
  let fixture: ComponentFixture<AcceptedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
