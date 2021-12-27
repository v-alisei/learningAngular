import { Component, OnInit, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sbj:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  ngOnInit() {
    this.sbj.subscribe(this.log)
    setInterval(()=>{this.sbj.next(Math.random()*1000)}, 200)
  }
  log(n:number){
    if(n>300 && n<700) console.log(n)
  }
}
