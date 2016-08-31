import {Component} from '@angular/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

import {NavController, NavParams} from 'ionic-angular';
import {Service} from '../../service';
import {LevelMovesPipe} from '../../pipe'

import * as _ from 'lodash'

@Component({
  templateUrl: 'build/pages/gen1-pkmn/gen1-pkmn.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes: [LevelMovesPipe]
})
export class Gen1PkmnPage {  
  
  pkmn: any;  
  
  constructor(private navCtrl: NavController, private navParams: NavParams, private service:Service) {	
	this.pkmn = navParams.get('pkmn');
  }
  
  onEvolTap(event, pkmnName) {
	// http://stackoverflow.com/questions/30107463/find-object-by-match-property-in-nested-array
	// let dbList = _.filter(this.service.getGen1(), 'pkmn');
	// let teste = _.find(dbList, _.flow(
		// _.property('pkmn'),
		// _.partialRight(_.some, { 'name.en': 'IVYSAUR' })
	// ));
	
	// console.log(teste);
	// let index = -1;
	// let dbList = _.filter(this.service.getGen1(), 'pkmn');
	// let property =  _.map(dbList, _.property('pkmn.name.en'));	
	// _.forEach(property, function(value, key){
		// if(value == 'IVYSAUR'){
			// index = key;
		// }
	// });
	// let obj = _.get(dbList[index], 'pkmn');	
	this.pkmn = this.service.findPkmnByName(pkmnName);
	console.log(this.pkmn);
  }
  
}

