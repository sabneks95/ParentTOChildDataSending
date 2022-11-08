import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userNames:string;
  @Output() userAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded(){
    return this.userAdded.emit(this.userNames)
  }

}
