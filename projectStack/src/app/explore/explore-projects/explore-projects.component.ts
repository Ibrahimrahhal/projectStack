import { ScrollService } from 'src/app/services/scroll.service';
import Project from 'src/app/types/Project';
import { ExploreDataService } from './../services/explore-data.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdvancedFiltersComponent } from './advanced-filters/advanced-filters.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.scss']
})
export class ExploreProjectsComponent implements OnInit {

  public ProjectsToRender:Project[];
  public searchQueryFormGroup:FormGroup;
  public pagesCount:number;
  public loading:boolean = false;
  private scrollSubscribtion:any;
  constructor(
    private dataService:ExploreDataService,
    private dialog:MatDialog,
    private fb:FormBuilder,
    private scroll:ScrollService,
    private detect:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.searchQueryFormGroup = this.fb.group({
      keyword:'',
      projectType: [],
      tags:[],
      page:0
    });
    this.loadProject();
    window["thiseee"] = this;

    if(this.scrollSubscribtion)
      this.scrollSubscribtion.unsubscribe();
    this.scrollSubscribtion = this.scroll.onScrollReachEnd().subscribe(()=>{
    this.loadMore();
    console.log("hiiiii fuckoer")
    })

  }


  loadProject(){
    this.loading = true;
    this.dataService.getProjects(this.searchQueryFormGroup.getRawValue()).then((results)=>{
      if(!this.ProjectsToRender)
        this.ProjectsToRender = [];
      (results.results || []).forEach(p=>this.ProjectsToRender.push(p))
      this.loading = false;
      this.pagesCount = results.pages;
      this.detect.detectChanges();
    }).catch((e)=>{
      this.loading = false;
      this.ProjectsToRender = [];
    })
  }

  openFiltersSection():void{
      this.dialog.open(AdvancedFiltersComponent, {
        data:this.searchQueryFormGroup
      }).afterClosed().toPromise().then((result)=>{
        if(!result)
          return;
        this.applySearchFilter();
      });

  }

  applySearchFilter(){
    this.ProjectsToRender = [];
    this.searchQueryFormGroup.get('page').setValue(0);
    this.loadProject();
  }

  loadMore(){
    if(!this.thereIsMoreData || this.loading)
      return;
    this.searchQueryFormGroup.get('page').setValue(this.searchQueryFormGroup.getRawValue().page+1);
    this.loadProject();
  }

  get thereIsMoreData():boolean{
    return !(this.pagesCount-1 <= this.searchQueryFormGroup.getRawValue().page)
  }

}

