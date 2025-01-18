import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get isProjectDashboard():boolean{
    if(this.pathsArray.length > 0 && this.pathsArray[0] == 'project' && this.pathsArray[2]=='dashboard')
    return true;
    return false;
  }

  get pathsArray():string[]{
    return window.location.pathname.split('/').filter(x=>x);
  }
}

