import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController,AlertController,ToastController} from 'ionic-angular';
import { DatePicker } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/transport/deposit.html'
})
export class DepositPage {
  public user = {
    phoneNumber : '',
    register: '',
    depositStartTime: '',
    depositFinishTime: '',
    depositBaggageAmount: '',
  };

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
  getBaggageNumber(){
    console.log(this.user.depositStartTime);
    console.log(this.user.depositFinishTime);
    console.log(this.user.depositBaggageAmount);
    if(this.user.depositStartTime == '' ||
       this.user.depositFinishTime == '' ||
       this.user.depositBaggageAmount == ''){
      let depositToastError = this.toastCtrl.create({
        message: '信息请填写完整',
        duration: 3000,
        position: 'top'
      });
      depositToastError.present();
    }else{
      let alertBaggageNumber = this.alertCtrl.create({
        title: '您的行李编号',
        subTitle: '2133982130902',
        buttons: ['确定']
      });
      alertBaggageNumber.present();
    }

  }
}
