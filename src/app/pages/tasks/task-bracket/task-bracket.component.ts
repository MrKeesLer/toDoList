import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-bracket',
  templateUrl: './task-bracket.component.html',
  styleUrls: ['./task-bracket.component.scss']
})
export class TaskBracketComponent implements OnInit {

  @Input() title: string = '';

  @Input()
  taskList: { title: string; desc: string; }[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
