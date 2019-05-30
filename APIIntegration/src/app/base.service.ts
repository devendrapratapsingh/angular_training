import { Injectable } from '@angular/core';
import {Http,Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: Http) { }
/*
This method is used to add header properties to each request

*/
  createHeader() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('timestamp', new Date().toISOString());
    return headers;
  }

/*
This method is used to hit the provided API url

*/
  get(url):Observable<Response>{
  	return this.http.get(url,{headers: this.createHeader()}).map(this.extractData).catch(this.handleError);
  }

/*
This method is used to get the good response from API

*/
  extractData(response:Response){
    return response.json();
  }

/*
This method is used to handle the error on API response

*/
  handleError(error:Response){
   return Observable.throw(error.json());
  }
}
