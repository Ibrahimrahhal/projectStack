import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemMessagesService {
  private messegingSubject:Subject<any>;
  constructor() {
    this.messegingSubject = new Subject();
  }
  showError(message, duration){
    this.messegingSubject.next({message, duration, error:true})
  }
  showSuccess(message, duration){
    this.messegingSubject.next({message, duration, error:false})
  }

  getMessagingObservable(){
    return this.messegingSubject as Observable<any>
  }
}

