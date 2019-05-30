import { Injectable } from '@angular/core';
import { BaseService } from './../base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private baseService:BaseService) { }

  getUsers(){
  var url = "https://reqres.in/api/users";
   return this.baseService.get(url);
  }
}
