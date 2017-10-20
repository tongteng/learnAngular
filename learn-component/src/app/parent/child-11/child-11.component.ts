import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-11',
  templateUrl: './child-11.component.html',
  styleUrls: ['./child-11.component.scss']
})
export class Child11Component implements OnInit {
  public time:string = new Date().toLocaleString();
  constructor() { }

  ngOnInit() {
  }

  public setTime(time:string):void {
    this.time = time;
  }

}
