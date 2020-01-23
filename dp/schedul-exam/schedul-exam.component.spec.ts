import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulExamComponent } from './schedul-exam.component';

describe('SchedulExamComponent', () => {
  let component: SchedulExamComponent;
  let fixture: ComponentFixture<SchedulExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
