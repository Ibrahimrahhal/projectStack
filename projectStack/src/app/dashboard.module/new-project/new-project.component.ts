import { StaticDataService } from 'src/app/services/static-data.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ProjectsDataService } from '../services/projects-data.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  projectFormGroup:FormGroup;
  loading:boolean = false;
  step:number = 1;
  agreeCheckbox:FormControl;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private http:HttpService,
    private data:ProjectsDataService,
    public staticData:StaticDataService
  ) { }

  ngOnInit() {
    this.projectFormGroup = this.fb.group({
      projectName: this.fb.control("", [Validators.required, Validators.minLength(4)]),
      maxNumberOfMembers:[null, Validators.required],
      projectType:[null, Validators.required],
      slogan: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      tags:[null, Validators.required],
      isPublic:[true],
      projectDesc: this.fb.control(null, [Validators.required, Validators.minLength(120)])
    });
    this.agreeCheckbox = new FormControl();
    window["newPP"] = this
  }
  navigateBack(){
    this.router.navigate(["/dashboard"])
  }

  async createProject():Promise<any>{
    if(this.step < 2){
      this.step++;
      return;
    }
    if(this.loading)
      return;
    this.loading = true;
    await this.http.postProject(this.projectFormGroup.getRawValue());
    await of(true).pipe(delay(1000)).toPromise()
    await this.data.updateProjects();
    this.loading = false;
    this.navigateBack();
  }

  get projectFirstLetter():string{
    return (this.projectFormGroup.getRawValue().projectName[0] || "S").toUpperCase();
  }

  get isFeildsForFirstStepValid():boolean{
    return (this.projectFormGroup.get('projectName').invalid
    || this.projectFormGroup.get('slogan').invalid
    || this.projectFormGroup.get('maxNumberOfMembers').invalid
    || this.projectFormGroup.get('projectType').invalid);
  }

}
