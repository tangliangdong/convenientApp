import {Component,ViewChild} from '@angular/core';
import {NavController,Slides,Platform,ViewController,LoadingController,ToastController} from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  private loginImg : any;
  public user = {
    phoneNumber : '',
    password : ''
  };
  private userPassword : any;

  constructor(private navCtrl: NavController,
              platform: Platform,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
    platform.ready().then((readySource) => {

    });

  }
  onPageWillEnter(){
    this.userPassword = document.getElementById('userPassword').getElementsByTagName('input');
    this.loginImg = document.getElementById('loginImg');
    this.loginImg.className += ' animated bounceIn';
    //this.loginImg.setAttribute('class','animated bounceIn login-img');
  }

  doLogin(){
    if(this.user.phoneNumber == '1' && this.user.password =='1' ){
      let loadingLogin = this.loadingCtrl.create({
        content: '正在登陆',
        spinner: 'ios',
        duration: 2000
      });
      localStorage.setItem('phoneNumber',this.user.phoneNumber);
      loadingLogin.present();
      setTimeout(() =>{
        this.viewCtrl.dismiss(this.user);
      }, 3000);
    }else if( this.user.phoneNumber == '' || this.user.password ==''){
      let toastError = this.toastCtrl.create({
        message: '手机号或密码错误',
        duration: 3000,
        position: 'top'
      });
      toastError.present();
    }else{
      let toastError = this.toastCtrl.create({
        message: '手机号或密码不能为空',
        duration: 3000,
        position: 'top'
      });
      toastError.onDidDismiss(() => {
        this.userPassword[0].value = '';
      });
      toastError.present();
    }


  }
}
