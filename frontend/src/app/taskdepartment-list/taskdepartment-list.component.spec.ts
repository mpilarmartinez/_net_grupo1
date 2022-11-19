import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdepartmentListComponent } from './taskdepartment-list.component';

describe('TaskdepartmentListComponent', () => {
  let component: TaskdepartmentListComponent;
  let fixture: ComponentFixture<TaskdepartmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdepartmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
