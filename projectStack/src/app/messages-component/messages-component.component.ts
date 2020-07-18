import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SystemMessagesService } from '../services/system-messages.service';

@Component({
  selector: 'app-messages-component',
  templateUrl: './messages-component.component.html',
  styleUrls: ['./messages-component.component.scss']
})
export class MessagesComponentComponent implements OnInit {
  messagingSubscribtion:any;
  message:string="";
  showMessage:boolean = false;
  errorMessage:boolean = false;
  constructor(
    private messages:SystemMessagesService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    window["messssssa"] = this;
    if(this.messagingSubscribtion)
      this.messagingSubscribtion.unsubscribe();
    this.messagingSubscribtion = this.messages.getMessagingObservable().subscribe(({message, duration, error})=>{
      this.errorMessage = error;
      this.message = message;
      this.showMessage = true;
      this.ref.detectChanges()
      setTimeout(()=>{
        this.showMessage = false;
        this.ref.detectChanges()
      }, duration);
    });
  }

}
