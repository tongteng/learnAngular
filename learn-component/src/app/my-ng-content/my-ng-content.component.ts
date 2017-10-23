import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-ng-content',
  templateUrl: './my-ng-content.component.html',
  styleUrls: ['./my-ng-content.component.scss']
})
export class MyNgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doSomething():void{
    alert("父级事件被触发");
  }

}
