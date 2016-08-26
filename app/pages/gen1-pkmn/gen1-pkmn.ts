import {Component} from '@angular/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

import {NavController, NavParams} from 'ionic-angular';
import {Service} from '../../service';
import {MapToIterable, KeysPipe, ValuesPipe} from '../../pipe'

@Component({
  templateUrl: 'build/pages/gen1-pkmn/gen1-pkmn.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes: [MapToIterable, KeysPipe, ValuesPipe]
})
export class Gen1PkmnPage {  
  
  pkmn: any;  
  
  constructor(private navCtrl: NavController, private navParams: NavParams) {	
	this.pkmn = navParams.get('pkmn');
	console.log(this.pkmn.moves.lvlUp);
  }
}

