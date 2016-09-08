import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController} from 'ionic-angular';
import { DatePicker } from 'ionic-native';

import {LoginPage} from '../login/login'

@Component({
  templateUrl: 'build/pages/usercenter/userinfo.html'
})
export class UserinfoPage {
  public user = {
    phoneNumber : '',
    register: '',
  };

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {
    if(localStorage.getItem('phoneNumber')!=null){
      this.user.phoneNumber = localStorage.getItem('phoneNumber');
      this.user.register = '';
    }
  }
  backToHome(){
    this.viewCtrl.dismiss();
  }
  cancel(){
    localStorage.removeItem('phoneNumber');
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }
}
