import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController} from 'ionic-angular';

import {IndentDetailsPage} from '../usercenter/indentDetails';

@Component({
  templateUrl: 'build/pages/usercenter/indent.html'
})
export class IndentPage {
  public user = {
    phoneNumber : '',
    register: '',
  };

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {

  }
  backToHome(){
    this.viewCtrl.dismiss();
  }
  openDetails(){
    let detailsModal = this.modalCtrl.create(IndentDetailsPage);
    detailsModal.present();
  }
}
