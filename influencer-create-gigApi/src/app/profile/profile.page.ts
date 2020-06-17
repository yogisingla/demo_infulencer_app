import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  segment: string;  
  afterAuthorisation = false;
  constructor() {
    this.segment="instagram"
   }

  ngOnInit() {
  }
insta(){
  this.afterAuthorisation=true;
  console.log("connected");
}
}
