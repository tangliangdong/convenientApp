import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, NavController,ModalController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {IndentPage} from './pages/usercenter/indent';
import {SystemNewsPage} from './pages/usercenter/systemNews';


@Component({
  templateUrl: 'build/app.html',
  providers: [NavController]
})
export class MyApp {
  @ViewChild('nav') nav : NavController;
  private rootPage: any;
  //private pages: any[];

  constructor(private platform: Platform,
              private menu: MenuController,
              private modalCtrl: ModalController) {
    this.menu = menu;
    // this.pages = [
    //     { title: 'Home', component: HomePage }
    // ];
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  // openPage(page) {
  //   this.menu.close()
  //   // Using this.nav.setRoot() causes
  //   // Tabs to not show!
  //   //this.nav.push(page.component);
  // };
  usercenter(number){
    switch (number) {
      case 1:

        break;
      case 2:
        let indentModal = this.modalCtrl.create(IndentPage);
        indentModal.present();
        break;
      case 3:
        let systemNewsModal = this.modalCtrl.create(SystemNewsPage);
        systemNewsModal.present();
        break;
      case 4:

        break;

      default:
        // code...
        break;
    }
  }
}

ionicBootstrap(MyApp);
