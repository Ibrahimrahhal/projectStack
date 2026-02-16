import { Injectable } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ReplaySubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject:ReplaySubject<PerfectScrollbarDirective>;
  private subscription:any;
  private scrollReachedend:Subject<void>;
  constructor() {
    this.scrollSubject = new ReplaySubject(1);
    this.scrollReachedend = new Subject();
  }

  private getScrollObject():Observable<PerfectScrollbarDirective>{
    return this.scrollSubject.asObservable();
  }


  public setScrollBarObject(object:PerfectScrollbarDirective){
    this.scrollSubject.next(object);
  }

  public scrollToElement(selector, offset?, delay?):void{
    this.getScrollObject().subscribe((object)=>{
      object.scrollToElement(selector, offset, delay);
    })
  }

  public scrollToTop():void{
    this.subscription = this.getScrollObject().subscribe((obj=>{
      obj.scrollToTop();
      if(this.subscription)
      this.subscription.unsubscribe();
    }));
  }

  public onScrollReachEnd():Observable<void>{
    return this.scrollReachedend.asObservable();
  }

  public scrollReachedEnd():void{
    this.scrollReachedend.next();
  }
}

