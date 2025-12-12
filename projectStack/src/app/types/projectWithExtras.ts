import Project from './Project';

export interface ProjectWithExtras{
    project:Project;
    extras:{
        isAdmin:boolean
    }
}

