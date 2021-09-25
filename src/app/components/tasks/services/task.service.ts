import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/types/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  public async getTasks(): Promise<Task[]> {
    // const tasks = of(TASKS);

    const tasks = TASKS;

    return tasks;
  }
}
