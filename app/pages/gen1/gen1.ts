import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Service} from '../../service';

import {Gen1PkmnPage} from '../gen1-pkmn/gen1-pkmn'

@Component({
  templateUrl: 'build/pages/gen1/gen1.html'
})
export class Gen1Page {  
  
  pkmnList: Array<any>;  
  
  constructor(private navCtrl: NavController, private service:Service) {	
	this.pkmnList = service.getGen1();
	console.log(this.pkmnList)
  }
  
  onTap(event, pkmn) {
	this.navCtrl.push(Gen1PkmnPage, {
		pkmn: pkmn
	});
  }

}
