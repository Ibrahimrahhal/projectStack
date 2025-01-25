import { FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-type-select',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {
  @Input() formControlPass:FormControl;
  @Output() proceed:EventEmitter<void>= new EventEmitter();
  userTypes:UserType[] = [{
    DESC:"Academic",
    image:"teachericon",
    type:1,
    longDesc:`
    Masters or PhD student, faculty member, or working in the academic field.
    `
  },{
    DESC:"Student",
    image:"studenticon",
    type:2,
    longDesc:`
    Undergraduate students.
        `
  },{
    DESC:"Entrepreneur",
    image:"businessman",
    type:3,
    longDesc:`
    Individuals with business ideas, start-ups, or youth professionals.
        `
  },{
    DESC:"Organization",
    image:"orgicon",
    type:4,
    longDesc:`
    Institutions or initiatives with multiple teams, projects and members.
    `
  }];
  constructor() { }

  ngOnInit(): void {
    window["sssssasa"] = this;
  }



}
interface UserType{
  DESC:string,
  image:string,
  longDesc?:string,
  type?:number
}

