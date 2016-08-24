import {Http, Response} from '@angular/http';
import {Injectable, Inject} from '@angular/core';

@Injectable()
export class Service {

  _data: any

  constructor(private http: Http) {}

  getData() {
    this.http
      .get('../assets/teste.json')
	  .map(x => x.json() )
      .map((data) => 
        this._data = data
      )
    console.log(this._data)
	// this.http.get('../assets/pokemon.yaml').then(res => console.log(res)).catch(err => console.log(err));
	// http://stackoverflow.com/questions/37380236/consume-json-file-from-service-in-angular-2?rq=1
  }
}