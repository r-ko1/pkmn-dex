import {Http, Response} 	from '@angular/http';
import {Injectable, Inject} from '@angular/core';
import { Observable }     	from 'rxjs/Observable';
import * as yaml 			from 'js-yaml';

@Injectable()
export class Service {

  _data: any;
  gen1: any;

  constructor(private http: Http) {}

  setGen1() {
    this.http
      .get('build/assets/pokemon.yaml')
	  .map((res:Response) => res.text())
      .subscribe(data => this.gen1 = yaml.load(data));	  
  }
  
  getGen1(){
	return this.gen1;
  }

  
  // this.http.get('../assets/pokemon.yaml').then(res => console.log(res)).catch(err => console.log(err));
  // http://stackoverflow.com/questions/37380236/consume-json-file-from-service-in-angular-2?rq=1
  // https://angular.io/docs/ts/latest/guide/server-communication.html
}