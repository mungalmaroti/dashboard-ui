import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentDate:any;
  constructor() {
    setInterval(() => {
      this.currentDate = Date.now();
    }, 1);
   }

  ngOnInit() {
  }

}
