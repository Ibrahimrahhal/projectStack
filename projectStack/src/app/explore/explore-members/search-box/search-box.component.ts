import { StaticDataService } from './../../../services/static-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    public data:StaticDataService,
    @Inject(MAT_DIALOG_DATA) public passedData:FormGroup,
    public dialModRef:MatDialogRef<any>) { }
  searchFormGroup:FormGroup;
  ngOnInit(): void {
    this.searchFormGroup = this.passedData;
  }

}
