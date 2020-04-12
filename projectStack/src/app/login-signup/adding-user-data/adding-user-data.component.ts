import { University } from './../../types/University';
import { StorageService } from './../../services/storage.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { decryptData } from '../../../util/util';
import { APIResponse } from 'src/app/types/API.Response';
import { Interest, Skill } from 'src/app/types/Interest.Skills';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { HttpService } from 'src/app/services/http.service';
var MB = 1024*1024;
@Component({
  selector: 'app-adding-user-data',
  templateUrl: './adding-user-data.component.html',
  styleUrls: ['./adding-user-data.component.scss']
})
export class AddingUserDataComponent implements OnInit {
  step:number = 1;
  group:FormGroup;
  loading:boolean = false;
  skills:Skill[] = [{
    Value:1,
    Desc:"Angular"
  },
  {
    Value:2,
    Desc:"Angular"
  },
  {
    Value:3,
    Desc:"Angular"
  }];

  interests:Interest[] = [{
    Value:1,
    Desc:"Angular"
  },
  {
    Value:2,
    Desc:"Angular"
  },
  {
    Value:3,
    Desc:"Angular"
  }];

  university:University[]=[
    {Name: "University Of Jordan", ID: 1},
    {Name: "German University", ID: 2}
  ];
  constructor(
    private fb:FormBuilder,
    private storage:StorageService,
    private http:HttpService) { }

  ngOnInit() {
    window["complete"] = this;
    this.group = this.fb.group({
      userType: [null],
      profileImage: [null],
      skills: [[]],
      resume: [null],
      interests: [[]],
      university: [null]
    });
  }

  get notSelectedInterests(){
    return this.interests.filter((inte)=>{
      return !this.group.get('interests').value.includes(inte.Value)
    })
  }

  get isUniversityValid(){
    return this.university.find((one:University)=>{
      return one.ID == this.group.getRawValue().university;
    })
  }
  selectUserType(userType:number){
    this.group.get('userType').setValue(userType);
    this.step++;
  }

  uploadFileHandler(e){
    this.loading = true;
    if(e.target.files.length == 0)
    return ;

    let file:File = e.target.files[0];
    if(file.size > 2*MB)
    return ;

    this.storage.uploadProfileImage(file).then((res:APIResponse)=>{
      this.group.get('profileImage').setValue(decryptData(res.data));
      this.loading = false;
      this.step++;
    });

  }

  uploadResume(e){
    this.loading = true;
    if(e.target.files.length == 0)
    return ;

    let file:File = e.target.files[0];
    if(file.size > 2*MB)
    return ;

    this.storage.uploadResume(file).then((res:APIResponse)=>{
      this.group.get('resume').setValue(decryptData(res.data));
      this.loading = false;
      this.step++;
    });

  }

  validateSkills(): Skill{
    if( this.group.getRawValue().skills.length  == 0 )
    return
    this.step++;
  }

  removeInterestChip(value: number){
    this.group.get('interests').setValue(this.group.get('interests').value.filter((int)=>{
      return int != value;
    }))
  }

  findInterestFromValue(value: number): Interest{
    return this.interests.find((int)=>{
      return int.Value == value;
    })
  }


  addInterestChip(event:MatChipInputEvent){
    const input = event.input;
    const value = event.value;
    if(!this.interests.find(int=>int.Desc == value))
      return;

    this.group.get('interests').setValue(this.group.get('interests').value.concat([this.interests.find(int=>int.Desc == value).Value]))

    if (input) {
      input.value = '';
    }

  }

  interestSelectedFromAutoComplete(event: MatAutocompleteSelectedEvent): void {
    this.group.get('interests').setValue(this.group.get('interests').value.concat([event.option.value]))
  }


  validateInterests():void{
    if(this.group.getRawValue().interests.length > 0)
    this.step++;

  }


  setUnivarsity(e:MatAutocompleteSelectedEvent): void{
    let university:University = this.university.find((one)=>{
      return one.Name == e.option.value;
    });
    this.group.get('university').setValue(university.ID);

  }

  async completeSignup(): Promise<boolean> {
    await this.http.putUser(this.group.getRawValue());
    return true;

  }

}
