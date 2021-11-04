import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public title = 'Task Tracker';
  public showAddTask: boolean;
  public subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  public ngOnInit(): void {}

  public handleAddTask(): void {
    this.uiService.toggleAddTask();
  }

  public hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
