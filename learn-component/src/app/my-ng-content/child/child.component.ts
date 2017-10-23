import { Component, OnInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @ContentChild(Child1Component)
  // child1:Child1Component;

  @ContentChildren(Child1Component)
  childList:QueryList<Child1Component>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit():void {
    this.childList.forEach((childItem) => {
      childItem.sayHello.subscribe((param)=>{
        console.log(childItem.title);
      })
    })
    // console.log(this.child1);
    // this.child1.title = "更改后的child1";
    // this.child1.sayHello.subscribe((param)=>{
    //   console.log("接收到触发时的param" + param);
    // })
    // this.child1.doSayHello();

  }


}
