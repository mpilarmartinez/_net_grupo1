import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdepartmentDetailComponent } from './taskdepartment-detail.component';

describe('TaskdepartmentDetailComponent', () => {
  let component: TaskdepartmentDetailComponent;
  let fixture: ComponentFixture<TaskdepartmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdepartmentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdepartmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
