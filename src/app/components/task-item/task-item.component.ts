import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  public task: Task;

  @Output()
  public onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  public onToggleReminder: EventEmitter<Task> = new EventEmitter();

  public faTimes = faTimes;

  public ngOnInit(): void {}

  public onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  public onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}
