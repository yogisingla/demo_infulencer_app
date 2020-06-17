import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-gig',
  templateUrl: './create-gig.page.html',
  styleUrls: ['./create-gig.page.scss'],
})
export class CreateGigPage implements OnInit {

  constructor(public toastController: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Gig Created Sucessfully',
      color:'primary',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
