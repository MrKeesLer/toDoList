import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public todoList= [
    {title: 'task 1',desc: 'Faire le tuto de ces morts'},
    {title: 'task 2',desc: 'Manger'}
  ];
  public doingList= [
    
  ];
  public doneList= [
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
