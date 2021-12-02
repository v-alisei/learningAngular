import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() msg = ""
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => console.log(this.msg), 100)
  }

}
