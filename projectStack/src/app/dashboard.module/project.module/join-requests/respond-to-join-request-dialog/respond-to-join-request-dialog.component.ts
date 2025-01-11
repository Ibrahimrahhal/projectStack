import { FormControl, Validators } from '@angular/forms';
import { JoinReuqestWithExtras } from './../../../../types/JoinRequest';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-respond-to-join-request-dialog',
  templateUrl: './respond-to-join-request-dialog.component.html',
  styleUrls: ['./respond-to-join-request-dialog.component.scss']
})
export class RespondToJoinRequestDialogComponent implements OnInit {
  respondMessage:FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: JoinReuqestWithExtras,
    public dialModRef:MatDialogRef<any>) { }

  ngOnInit(): void {
    this.respondMessage = new FormControl(null, [Validators.minLength(10), Validators.required]);

  }


  closeDialog(data:any){
    this.dialModRef.close(data);
  }

}
