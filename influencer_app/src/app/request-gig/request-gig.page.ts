import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-request-gig',
  templateUrl: './request-gig.page.html',
  styleUrls: ['./request-gig.page.scss'],
})
export class RequestGigPage implements OnInit {
  imageLink:'string'
 

  data={
    
      imageLink:'https://tomatoheart.com/wp-content/uploads/2016/06/BB-Ki-Vines-bhuvan-bam-tomato-heart-tomatoheart.jpg',
      Infulencer_name:'Bhuvan Bam',
  }
    
  

  constructor(public toastController: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Request sent',
      color:'primary',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
