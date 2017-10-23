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

  public doSomething(e):void{
    alert("父级事件被触发");
    console.log(e);
  }

}
