import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from 'src/app/shared/model/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public todo: Task[] = [
    new Task('task 1','Faire le tuto de ces morts',TaskStatus.TODO),
    new Task('task 2','Manger',TaskStatus.TODO)
  ];
  public doing: Task[] = [
   
  ];
  public done: Task[] = [
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
