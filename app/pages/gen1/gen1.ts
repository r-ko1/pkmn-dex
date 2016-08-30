import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Service} from '../../service';

import {Gen1PkmnPage} from '../gen1-pkmn/gen1-pkmn';

import * as _ from 'lodash'

@Component({
  templateUrl: 'build/pages/gen1/gen1.html'
})
export class Gen1Page {  
  
  dbList: Array<any>;  
  
  constructor(private navCtrl: NavController, private service:Service) {	
	this.dbList = _.filter(service.getGen1(), 'pkmn');
	console.log(this.dbList)
  }
  
  onTap(event, pkmn) {
	this.navCtrl.push(Gen1PkmnPage, {
		pkmn: pkmn
	});
  }

}
