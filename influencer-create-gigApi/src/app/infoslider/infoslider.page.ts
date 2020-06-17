import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-infoslider",
  templateUrl: "./infoslider.page.html",
  styleUrls: ["./infoslider.page.scss"],
})
export class InfosliderPage implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  continue() {
    this.router.navigate(["/login"]);
    // alert("will go to tab page");
  }
}