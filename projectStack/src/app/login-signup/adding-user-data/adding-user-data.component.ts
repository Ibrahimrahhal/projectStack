import { AuthServiceService } from 'src/app/services/auth-service.service';
import { University } from './../../types/University';
import { StorageService } from './../../services/storage.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { decryptData } from '../../../util/util';
import { APIResponse } from 'src/app/types/API.Response';
import { Interest, Skill } from 'src/app/types/Interest.Skills';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { StaticDataService } from 'src/app/services/static-data.service';
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

  constructor(
    private fb:FormBuilder,
    private storage:StorageService,
    private auth:AuthServiceService,
    private http:HttpService,
    private router:Router,
    public staticData:StaticDataService) { }

  ngOnInit() {
    this.group = this.fb.group({
      userType: [null],
      profileImage: [null],
      skills: [[]],
      resume: [null],
      interests: [[]],
      university: [null],
      department:[null],
      yearOfGrad:[null],
      headline:[null],
      summery:[null]
    });
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
  async completeSignup(): Promise<boolean> {
    this.loading = true;
    await this.http.patchUser(this.group.getRawValue());
    await this.http.getUserDate();
    this.router.navigate(['/dashboard']);
    return true;
  }

}
