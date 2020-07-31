import { University, Department } from './../types/University';
import { Skill, Interest } from './../types/Interest.Skills';
import { ProjectType } from '../types/projectType';
import { Injectable } from '@angular/core';
import skills from './staticData/skills';
import interest from './staticData/interests';
import universities from  './staticData/universities';
import departments from './staticData/departments';
import ProjectTypes from './staticData/ProjectType';
import ProjectTags from './staticData/ProjectTags';
import ProjectCategories from './staticData/ProjectCategories';
import { ProjectTag } from '../types/ProjectTag';
import { ProjectCategory } from '../types/ProjectCategory';

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

  get ProjectTypes():ProjectType[]{
    return ProjectTypes || [];
  }

  get ProjectTags():ProjectTag[]{
    return ProjectTags || [];
  }


  get ProjectCategories():ProjectCategory[]{
    return ProjectCategories || [];
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

  getProjectTypeNameByID(ID:string){
    return this.ProjectTypes.find(x=>x.ID == ID).DESC;
  }

  getProjectTagNameByID(ID:string){
    return this.ProjectTags.find(x=>x.ID == ID).DESC;
  }

  getProjectCategoryNameByID(ID:string){
    return this.ProjectCategories.find(x=>x.ID == ID).DESC;
  }
}
