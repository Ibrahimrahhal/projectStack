import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit{
  title = 'Teams Lounge';
  @ViewChild(PerfectScrollbarComponent) scrollBar:PerfectScrollbarComponent;

  constructor(
    public scroll:ScrollService,
    private activatedRoute:ActivatedRoute,
    private detect:ChangeDetectorRef){
      window["adddd"] =  this;
  }

  ngAfterViewInit():void{
    this.scroll.setScrollBarObject(this.scrollBar.directiveRef);
  }

  get isHeaderDisabled():boolean {
    return this.getRouteDataRecurse().hideHeader;
  }

  get isFooterDisabled():boolean {
    return this.getRouteDataRecurse().hideFooter;
  }

  getRouteDataRecurse(children = this.activatedRoute.children){
    return {...children.reduce((prev, current, index)=>{
      return {...prev, ...current.snapshot.data, ...(this.getRouteDataRecurse(current.children) || {})};
  }, {})}
  }


}

