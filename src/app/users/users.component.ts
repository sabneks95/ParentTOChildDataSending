import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  usersList = [];
  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded(event:string) {
    return this.usersList.push(event);
  }
}
