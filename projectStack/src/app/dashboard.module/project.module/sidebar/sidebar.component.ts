import { DataServiceService } from './../services/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Project from 'src/app/types/Project';

@Component({
  selector: 'project-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  project:Project;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private data:DataServiceService) { }

  ngOnInit(): void {
    window["sidebarsssss"] = this;
    this.data.activatedProject.subscribe((activatedProejct)=>{
      this.project = activatedProejct;
    });
  }

  get activeTab():string{
    if(this.route.snapshot.children[0].url[0])
      return this.route.snapshot.children[0].url[0].path;
    return 'home'
  }

  navigate(arr?:Array<string>){
    let base = ['project', this.project.ID, 'dashboard']
    if(arr)
      this.router.navigate([...base,...arr]);
    else
      this.router.navigate(base);
  }



}

