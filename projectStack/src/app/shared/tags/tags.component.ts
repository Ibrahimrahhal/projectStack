import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tagsArray:Tag[];
  @Input('theme') _theme:string;
  @Input() deletable:boolean;
  @Output() tagDeleted:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  get tags():Tag[]{
    return this.tagsArray || [];
  }

  get themeClass():string{
    let theme = this._theme || 'default'
    return `theme_${theme}`;
  }

  deleteTag(ID:string):void{
    this.tagDeleted.emit(ID);
  }

}


interface Tag{
  DESC:string;
  ID:string;
}

