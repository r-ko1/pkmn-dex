import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Service} from '../../service';

@Component({
  templateUrl: 'build/pages/gen1-pkmn/gen1-pkmn.html'
})
export class Gen1PkmnPage {  
  
  pkmn: any;  
  
  constructor(private navCtrl: NavController, private navParams: NavParams) {	
	this.pkmn = navParams.get('pkmn');
  }

}
