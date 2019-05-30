import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users=[];
  error;
  constructor(private userService:UserService) {
   this.getUsers();
   }

  ngOnInit() {
  }

  getUsers(){
   return this.userService.getUsers().subscribe(response=>this.handleData(response),error=>this.error=error)
  }

  handleData(response){
  	this.users = response.data;
  }

}
