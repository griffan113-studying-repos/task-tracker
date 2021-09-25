import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/types/Task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private readonly tasksService: TaskService) {}

  public async ngOnInit(): Promise<void> {
    //such like a promise
    /*     this.tasksService.getTasks().subscribe((tasks) => {
      tasks = this.tasks;
    }); */

    this.tasks = await this.tasksService.getTasks();
  }
}
