import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Gen1Page} from '../gen1/gen1'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  
  }
  
  openGen1(){
	this.navCtrl.setRoot(Gen1Page);
  }
}
