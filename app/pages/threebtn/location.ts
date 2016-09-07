import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController} from 'ionic-angular';
import { DatePicker } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/threebtn/location.html'
})
export class LocationPage {
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
