import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  @Input() userList: Object[] = []
  log(user:Object){
    console.log(user)
    console.log(this.userList.indexOf(user))
  }
  delete(user:Object){
    this.userList.splice(this.userList.indexOf(user), 1)
  }
}
