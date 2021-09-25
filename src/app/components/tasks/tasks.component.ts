import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/types/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = TASKS;

  constructor() {}

  public ngOnInit(): void {}
}
