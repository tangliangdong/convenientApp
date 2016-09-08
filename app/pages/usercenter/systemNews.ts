import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/usercenter/systemNews.html'
})
export class SystemNewsPage {
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
}
