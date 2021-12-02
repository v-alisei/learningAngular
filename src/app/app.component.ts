import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList = [
    {
      firstName: 'Ivan',
      lastName: 'Petrovich',
      age: 24,
    },
    {
      firstName: 'Fedor',
      lastName: 'Ivanov',
      age: 20,
    },
    {
      firstName: 'Petr',
      lastName: 'Lisichkin',
      age: 22,
    },
  ]
}
