import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/service/auth.service';
import { TaskService } from 'src/app/core/service/task.service';
import { Task, TaskStatus } from 'src/app/shared/model/task.model';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  public currentUId: string = '';
  private uIdSub: Subscription;

  public todo: Task[] = [];
  private toDoSub: Subscription;
  public doing: Task[] = [];
  private doingSub: Subscription;
  public done: Task[] = [];
  private doneSub: Subscription;

  constructor(public auth: AuthService, public taskService: TaskService, public dialog: MatDialog) { 
    this.uIdSub = this.auth.currentUserId$.subscribe((uId) => {
      this.currentUId = uId;
    });
    this.toDoSub = this.taskService.getTaskByAuthorId(this.currentUId).subscribe(todo =>{
      console.log(todo);
      this.todo = todo;
    });
    this.doingSub = this.taskService.getTaskByStatus(this.currentUId ,TaskStatus.DOING).subscribe(doing =>{
      this.doing = doing;
    });
    this.doneSub = this.taskService.getTaskByStatus(this.currentUId ,TaskStatus.DONE).subscribe(done =>{
      this.done = done;
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void{
    this.uIdSub.unsubscribe();
    this.toDoSub.unsubscribe();
    this.doingSub.unsubscribe();
    this.doneSub.unsubscribe();
  }

  async addNewTask(): Promise<void> {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {data: this.currentUId});
    const task: Task = await dialogRef.afterClosed().pipe(first()).toPromise();
    await this.taskService.createTask(task);
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
