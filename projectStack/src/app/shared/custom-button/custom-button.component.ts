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
  @Input('styles') _styles;
  @Input('link') _link;
  @Input() disabled;
  @Input() rounded;
  @Input() stroked;
  @Input() long;
  @Input() thin;
  @Input() type;
  @Input() strokeColor;
  constructor() { }

  ngOnInit() {
  }

  get classes(){
    return {
      ...(this.passedClass?this.passedClass:{}),
      'strokedButton':this.stroked,
      'roundedButton':this.rounded,
      'longButton':this.long,
      'thinButton':this.thin,
      'color-white':!this.stroked,
      'white-button':!this.stroked
    }
  }

  get styles(){
      return {
        ...(this._styles?this._styles:{}),
        borderColor:this.stroked?`${this.strokeColor}`:'',
        color:this.strokeColor?`${this.strokeColor}`:''
      }
  }

  get link():string[]{
    return this._link || null;
  }

}

