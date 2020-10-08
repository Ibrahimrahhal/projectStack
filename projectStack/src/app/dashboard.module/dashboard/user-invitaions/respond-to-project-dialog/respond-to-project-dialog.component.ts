import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JoinReuqestWithExtras } from '../../../../types/JoinRequest';

@Component({
  selector: 'app-respond-to-project-dialog',
  templateUrl: './respond-to-project-dialog.component.html',
  styleUrls: ['./respond-to-project-dialog.component.scss']
})
export class RespondToProjectDialogComponent implements OnInit {
  respondMessage:FormControl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: JoinReuqestWithExtras,
    public dialModRef:MatDialogRef<any>) { }

  ngOnInit(): void {
    this.respondMessage = new FormControl(null, [Validators.minLength(200), Validators.required]);

  }

  closeDialog(result){
    this.dialModRef.close(result);
  }

}
