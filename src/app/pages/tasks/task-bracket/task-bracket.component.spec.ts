import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBracketComponent } from './task-bracket.component';

describe('TaskBracketComponent', () => {
  let component: TaskBracketComponent;
  let fixture: ComponentFixture<TaskBracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBracketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
