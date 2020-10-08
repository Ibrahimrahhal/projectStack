import { StaticDataService } from './../../../services/static-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { University } from 'src/app/types/University';

@Component({
  selector: 'app-user-head-line-info',
  templateUrl: './user-head-line-info.component.html',
  styleUrls: ['./user-head-line-info.component.scss']
})
export class UserHeadLineInfoComponent implements OnInit {
  @Input() group:FormGroup;
  constructor(public staticData:StaticDataService) { }

  ngOnInit(): void {
  }

  setUnivarsity(e:MatAutocompleteSelectedEvent): void{
    let university:University = this.staticData.Universities.find((one)=>{
      return one.DESC == e.option.value;
    });
    this.group.get('university').setValue(university.ID);

  }
  setDepartment(e:MatAutocompleteSelectedEvent): void{
    let department:University = this.staticData.Departments.find((one)=>{
      return one.DESC == e.option.value;
    });
    this.group.get('department').setValue(department.ID);
    console.log('this', this.group.get('department').value)
  }

}
