import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from 'src/app/types/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3333/tasks';

  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS);

    return this.http.get<Task[]>(this.apiUrl);
  }

  public deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<Task>(url);
  }
}
