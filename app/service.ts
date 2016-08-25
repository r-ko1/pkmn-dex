import {Http, Response} from '@angular/http';
import {Injectable, Inject} from '@angular/core';
import * as yaml from 'js-yaml';

@Injectable()
export class Service {

  _data: any

  constructor(private http: Http) {}

  getData() {
    return this.http
      .get('build/assets/pokemon.yaml')
      .map((data) => this._data = data);	
  }
  // this.http.get('../assets/pokemon.yaml').then(res => console.log(res)).catch(err => console.log(err));
  // http://stackoverflow.com/questions/37380236/consume-json-file-from-service-in-angular-2?rq=1
}