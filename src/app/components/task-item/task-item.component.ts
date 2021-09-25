import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  public task: Task;

  constructor() {}

  ngOnInit(): void {}
}
