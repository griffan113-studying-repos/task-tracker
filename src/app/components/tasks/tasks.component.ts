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

  public ngOnInit() {
    //such like a promise
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));

    // this.tasks = await this.tasksService.getTasks();
  }

  public deleteTask(task: Task): void {
    this.tasksService
      .deleteTask(task)
      .subscribe(
        () =>
          (this.tasks = this.tasks.filter(
            (filterTask) => filterTask.id !== task.id
          ))
      );
  }

  public toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
  }

  public addTask(task: Task): void {
    this.tasksService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
