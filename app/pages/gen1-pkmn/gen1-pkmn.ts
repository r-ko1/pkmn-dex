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
	this.pkmn = this.service.findPkmnByName(pkmnName);
  }
  
}

