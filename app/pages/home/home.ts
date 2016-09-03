import {Component,ViewChild} from '@angular/core';
import {NavController,Slides,Platform } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;

  private isRotate = false;
  public addthree : any;
  public firstbtn : any;
  public secondbtn : any;
  public thirdbtn : any;

  constructor(private navCtrl: NavController,
              platform: Platform) {
    platform.ready().then((readySource) => {
      // Platform now ready, execute any required native code
      //this.slider.slideNext(300);
      //this.slider.slideNext(300,true);
      //console.log(this.slider.ionDidChange);
      //this.slider._proto_.slideTo(2, 500,false);
      this.addthree = document.getElementById('addthree');
      this.firstbtn = document.getElementById('firstbtn');
      this.secondbtn = document.getElementById('secondbtn');
      this.thirdbtn = document.getElementById('thirdbtn');



    });
  }
  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    speed: 2500,
    autoplay: 1000
  };

  onSlideChanged() {
    //console.log(this.slider);
  }

  openThree(){
    //console.log(this.firstbtn);
    if(!this.isRotate){
      this.isRotate = true;
      this.addthree.removeAttribute('addbtn-no-rotate');
      this.addthree.setAttribute('class',"addbtn-rotate");
      this.firstbtn.removeAttribute('nofirstbtn');
      this.secondbtn.removeAttribute('nosecondbtn');
      this.thirdbtn.removeAttribute('nothirdbtn');
      this.firstbtn.setAttribute('class','firstbtn');
      this.secondbtn.setAttribute('class','secondbtn');
      this.thirdbtn.setAttribute('class','thirdbtn');

    }else{
      this.isRotate = false;
      this.addthree.removeAttribute('addbtn-rotate');
      this.addthree.setAttribute('class',"addbtn-no-rotate");
      this.firstbtn.removeAttribute('firstbtn');
      this.secondbtn.removeAttribute('secondbtn');
      this.thirdbtn.removeAttribute('thirdbtn');
      this.firstbtn.setAttribute('class','nofirstbtn');
      this.secondbtn.setAttribute('class','nosecondbtn');
      this.thirdbtn.setAttribute('class','nothirdbtn');
    }


  }
}
