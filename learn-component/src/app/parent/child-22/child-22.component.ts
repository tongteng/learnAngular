import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-22',
  templateUrl: './child-22.component.html',
  styleUrls: ['./child-22.component.scss']
})
export class Child22Component implements OnInit {
  public time:string = new Date().toLocaleString();
  constructor() { }

  ngOnInit() {
  }

  public setTime(time:string):void {
    this.time = time;
  }
}
