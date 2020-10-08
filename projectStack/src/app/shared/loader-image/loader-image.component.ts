import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'load-image',
  templateUrl: './loader-image.component.html',
  styleUrls: ['./loader-image.component.scss']
})
export class LoaderImageComponent implements OnInit {
  @Input() height:string;
  @Input() width:string;
  @Input() styles:string;
  @Input() link:string;
  imageLoaded:boolean = false
  removeLoaderFromDom:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public get StylesObject(){
    return this.styles || {};
  }

  imageLoadedEvent(){
    this.imageLoaded = true;
    setTimeout(()=>{
      this.removeLoaderFromDom = true;
    },340)
  }

}
