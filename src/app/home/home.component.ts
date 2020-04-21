import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bottomtabs_index = 3;

  constructor() { }

  public selectIndex(index: any):void {
    this.bottomtabs_index = index;
  }

  ngOnInit(): void { }

}
