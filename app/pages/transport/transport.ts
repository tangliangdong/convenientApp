import {Component} from '@angular/core';
import {NavController,Platform,ModalController,ViewController,LoadingController,AlertController,ToastController } from 'ionic-angular';
import {DatePicker } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/transport/transport.html'
})
export class TransportPage {
  public user = {
    phoneNumber : '',
    register: '',
    date: '',
    firstLocal: '',
    lastLocal: '',
    keyword: '',
    baggageAmount: ''
  };

  constructor(private navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public loading: LoadingController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController ) {

  }
  onPageLoaded(){

  }

  datePick(){
    DatePicker.show({
      date: new Date(),
      mode: 'date'
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }
  uploading(){
    if(this.user.date == '' ||
       this.user.firstLocal == '' ||
       this.user.lastLocal == '' ||
       this.user.baggageAmount == ''){
      let toast = this.toastCtrl.create({
        message: '信息请填写完整',
        duration: 2000,
        position: 'top'
      });
    toast.present();
    }else{
      let uploading = this.loading.create({
        content: '正在保存',
        spinner: 'ios',
        duration: 1000
      });
      let alertUpload = this.alertCtrl.create({
        title: '行李运送',
        message: '确认信息',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {

            }
          },
          {
            text: '确定',
            handler: () => {
              uploading.present();
              setTimeout(()=>{
                uploading.dismiss();
              },1000)
              setTimeout(()=>{
                this.viewCtrl.dismiss();
              },2000);
            }
          }
        ]
      });
      alertUpload.present();
    }


  }
}
