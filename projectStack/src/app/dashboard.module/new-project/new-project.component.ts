import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ProjectsDataService } from '../services/projects-data.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  projectFormGroup:FormGroup;
  loading:boolean = false;
  agreeCheckbox:FormControl;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private http:HttpService,
    private data:ProjectsDataService
  ) { }

  ngOnInit() {
    this.projectFormGroup = this.fb.group({
      projectName:['', Validators.required],
      maxNumberOfMembers:[null, Validators.required],
      projectType:[null, Validators.required],
      slogan:[null, Validators.required],
      tags:[null, Validators.required],
      isPublic:[true]
    });
    this.agreeCheckbox = new FormControl();
    window["newPP"] = this
  }
  navigateBack(){
    this.router.navigate(["/dashboard"])
  }

  async createProject():Promise<any>{
    if(this.loading)
      return;
    this.loading = true;
    await this.http.postProject(this.projectFormGroup.getRawValue());
    await this.data.updateProjects();
    this.loading = false;
    this.navigateBack();
  }

  get projectFirstLetter():string{
    return (this.projectFormGroup.getRawValue().projectName[0] || "S").toUpperCase();
  }

}
