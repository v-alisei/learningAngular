import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list-element',
  templateUrl: './user-list-element.component.html',
})
export class UserListElementComponent{
  @Input() user: any = {
    firstName: '',
    lastName: '',
    age: 0,
  }
  onDelete(){
    this.delete.emit(this.user)
  }
  @Output() delete = new EventEmitter<Object>();

}
