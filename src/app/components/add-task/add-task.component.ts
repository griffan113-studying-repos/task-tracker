import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  public text: string;
  public day: string;
  public reminder: boolean = false;

  @Output()
  public onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
