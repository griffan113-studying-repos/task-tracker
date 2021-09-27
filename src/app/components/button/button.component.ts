import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public text: string;

  @Input()
  public color: string;

  @Output() btnClick = new EventEmitter();

  public ngOnInit(): void {}

  public onClick() {
    this.btnClick.emit();
  }
}
