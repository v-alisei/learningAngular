import { Component } from '@angular/core';
function test():void{
  console.log('hiiiiii')
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){ 
    test()
  }
  title = 'learningAngular';
  
}
