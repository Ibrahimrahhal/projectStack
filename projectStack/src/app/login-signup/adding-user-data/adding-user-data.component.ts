import { AuthServiceService } from 'src/app/services/auth-service.service';
import { University } from './../../types/University';
import { StorageService } from './../../services/storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { decryptData } from '../../../util/util';
import { APIResponse } from 'src/app/types/API.Response';
import { Interest, Skill } from 'src/app/types/Interest.Skills';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { StaticDataService } from 'src/app/services/static-data.service';
import userTypes from 'src/app/services/staticData/userTypes';
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
  userStepsEnums = userDataSteps;
  constructor(
    private fb:FormBuilder,
    private storage:StorageService,
    private auth:AuthServiceService,
    private http:HttpService,
    private router:Router,
    public staticData:StaticDataService) { }

  ngOnInit() {
    this.group = this.fb.group({
      userType: this.fb.control(null,  [Validators.required]),
      profileImage: this.fb.control(null),
      skills: this.fb.control([]),
      resume: this.fb.control(null),
      interests: this.fb.control([]),
      university: this.fb.control(null,  [Validators.required]),
      department: this.fb.control(null,  [Validators.required]),
      yearOfGrad: this.fb.control(null,  [Validators.required]),
      yearOfEnroll: this.fb.control(null,  [Validators.required]),
      headline: this.fb.control(null,  [ Validators.required, Validators.minLength(10)]),
      summery: this.fb.control(null, [Validators.required, Validators.minLength(120)])
    });
    window["complete"] = this;
  }

  get notSelectedInterests(){
    return this.staticData.Interests.filter((inte)=>{
      return !this.group.get('interests').value.includes(inte.ID)
    })
  }
  log(e){console.log(e)}
  get isUniversityValid(){
    return this.staticData.Universities.find((one:University)=>{
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

  skipImageUpload():void {
    this.group.get('profileImage').setValue("");
    this.step++;
  }

  skipResumeUpload():void {
    this.group.get('resume').setValue("");
    this.step++;

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

  removeInterestChip(value: string){
    this.group.get('interests').setValue(this.group.get('interests').value.filter((int)=>{
      return int != value;
    }))
  }

  findInterestFromValue(value:string): Interest{
    return this.staticData.Interests.find((int)=>{
      return int.DESC == value;
    })
  }


  addInterestChip(event:MatChipInputEvent){
    const input = event.input;
    const value = event.value;
    if(!this.staticData.Interests.find(int=>int.DESC == value))
      return;

    this.group.get('interests').setValue(this.group.get('interests').value.concat([this.staticData.Interests.find(int=>int.DESC == value).ID]))

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



  async completeSignup(): Promise<boolean> {
    this.loading = true;
    await this.http.patchUser(this.group.getRawValue());
    await this.http.getUserDate();
    this.router.navigate(['/dashboard']);
    return true;
  }
  moveToNextStep(){
    switch(this.group.get('userType').value.toString()){
      case userTypes.Academic.toString():
        this.group.get('yearOfGrad').clearValidators();
        this.group.get('yearOfGrad').updateValueAndValidity();
        this.group.get('yearOfEnroll').clearValidators();
        this.group.get('yearOfEnroll').updateValueAndValidity();
      break;

      case userTypes.Entrep.toString():
        this.group.get('yearOfGrad').clearValidators();
        this.group.get('yearOfGrad').updateValueAndValidity();
        this.group.get('yearOfEnroll').clearValidators();
        this.group.get('yearOfEnroll').updateValueAndValidity();
        this.group.get('university').clearValidators();
        this.group.get('university').updateValueAndValidity();
        this.group.get('department').clearValidators();
        this.group.get('department').updateValueAndValidity();
      break;
    }
    this.step++;
  }

}


const userDataSteps = {
  selectUserType:1,
  fillSummery:2,
  uploadImage:3,
  addSkills:4,
  uploadResume:5,
  addInterests:6,
  userHeadLine:7
}

