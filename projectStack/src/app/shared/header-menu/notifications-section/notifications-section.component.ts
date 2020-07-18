import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-section',
  templateUrl: './notifications-section.component.html',
  styleUrls: ['./notifications-section.component.scss']
})
export class NotificationsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get notifications(){
    return [];
  }

}
