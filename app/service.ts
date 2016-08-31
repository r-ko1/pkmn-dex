import {Http, Response} 	from '@angular/http';
import {Injectable, Inject} from '@angular/core';
import { Observable }     	from 'rxjs/Observable';
import * as yaml 			from 'js-yaml';
import * as _ 				from 'lodash'

@Injectable()
export class Service {

  _data: any;
  gen1: any;

  constructor(private http: Http) {}

  setGen1() {
    this.http
      .get('build/assets/pokemon.yml')
	  .map((res:Response) => res.text())
      .subscribe(data => this.gen1 = yaml.load(data));	  
  }
  
  getGen1(){
	return this.gen1;
  }
  
  findPkmnByName(name){
	let pkmn: any;
	let dbList = _.filter(this.gen1, 'pkmn');
	let property =  _.map(dbList, _.property('pkmn.name.en'));	
	_.forEach(property, function(value, key){		
		if(_.eq(value,name)){			
			pkmn = _.get(dbList[key], 'pkmn');
		}
	});
	return pkmn;
  }

  
  // this.http.get('../assets/pokemon.yaml').then(res => console.log(res)).catch(err => console.log(err));
  // http://stackoverflow.com/questions/37380236/consume-json-file-from-service-in-angular-2?rq=1
  // https://angular.io/docs/ts/latest/guide/server-communication.html
}