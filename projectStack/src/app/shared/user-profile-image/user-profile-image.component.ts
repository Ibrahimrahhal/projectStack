import { DomPortalHost } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'user-image',
  templateUrl: './user-profile-image.component.html',
  styleUrls: ['./user-profile-image.component.scss']
})
export class UserProfileImageComponent implements OnInit {

  constructor(private domSan:DomSanitizer) { }
  @Input() width;
  @Input() height;
  @Input() linkToImage;
  @Input() userName;
  @Input() lightShadow;
  ngOnInit(): void {
  }

  get safeLink():SafeStyle{
    return this.domSan.bypassSecurityTrustStyle(`url('${this.linkToImage}')`);
  }

}
