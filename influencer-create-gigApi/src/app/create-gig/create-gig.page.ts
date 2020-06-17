import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-create-gig',
  templateUrl: './create-gig.page.html',
  styleUrls: ['./create-gig.page.scss'],
})
export class CreateGigPage implements OnInit {
  public selectGig="";
  public gigCost="";
  public description="";
  public deliveryTime="";
  public file="";

  constructor(public toastController: ToastController) { }
  submit(){
    let data={
      selectGig:this.selectGig,
      file:this.file,
      description:this.description,
      deliveryTime:this.deliveryTime,
      gigCost:this.gigCost
    }

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Gig Created Sucessfully',
      color:'danger',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
