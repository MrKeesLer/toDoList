import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task, TaskStatus } from 'src/app/shared/model/task.model';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

  public taskForm = this.fb.group({
      title: [''],
      desc: ['']
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: string
    ,private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
  }

  createTask(): Task {
    return {title: this.taskForm.get('title')?.value,
            desc: this.taskForm.get('desc')?.value,
            status: TaskStatus.TODO,
            authorId: this.data};
  }

}
