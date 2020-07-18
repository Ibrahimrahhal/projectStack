import { University, Department } from './../types/University';
import { Skill, Interest } from './../types/Interest.Skills';
import { Injectable } from '@angular/core';
import skills from './staticData/skills';
import interest from './staticData/interests';
import universities from  './staticData/universities';
import departments from './staticData/departments';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }

  get Skills():Skill[]{
    return skills || [];
  }

  get Interests():Interest[]{
    return interest || [];
  }

  get Universities():University[]{
    return universities || [];
  }

  get Departments():Department[]{
    return departments || [];
  }

  getUniversityNameByID(ID:string):string{
    return this.Universities.find(x=>x.ID == ID).DESC;
  }

  getDepartmentNameByID(ID:string){
    return this.Departments.find(x=>x.ID == ID).DESC;
  }

  getInterestNameByID(ID:string){
    return this.Interests.find(x=>x.ID == ID).DESC;
  }

  getSkillNameByID(ID:string){
    return this.Skills.find(x=>x.ID == ID).DESC;
  }

}
