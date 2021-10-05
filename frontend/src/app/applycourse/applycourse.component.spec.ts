import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycourseComponent } from './applycourse.component';

describe('ApplycourseComponent', () => {
  let component: ApplycourseComponent;
  let fixture: ComponentFixture<ApplycourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplycourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
