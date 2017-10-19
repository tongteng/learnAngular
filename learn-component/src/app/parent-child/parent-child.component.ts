import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doSomething():void{
    alert("子组件触发事件");
  }

}
