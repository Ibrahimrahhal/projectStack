import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Output('clickEvent') click = new EventEmitter();
  @Input() loading;
  @Input() passedClass;
  @Input() color;
  @Input() styles;
  @Input() disabled;
  constructor() { }

  ngOnInit() {
  }

}
