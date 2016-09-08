import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController,AlertController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/usercenter/indentDetails.html'
})
export class IndentDetailsPage {
  public user = {
    phoneNumber : '',
    register: '',
  };

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              private alertCtrl: AlertController) {

  }
  backToHome(){
    this.viewCtrl.dismiss();
  }
  comfirmTake(){
    let comfirmAlert = this.alertCtrl.create({
      title: '送货订单',
      message: "是否确定收件",
      buttons: [
        {
          text: '取消',
          handler: data => {

          }
        },
        {
          text: '确定',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    comfirmAlert.present();
  }
}
