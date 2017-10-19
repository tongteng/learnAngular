import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public _childTitle = "";
  constructor() { }
  @Input()
  set childTitle(childTitle:string) {
    this._childTitle = "【" + childTitle + "】";
  }
  get childTitle():string{
    return this._childTitle;
  }


  @Output()
  public follow = new EventEmitter();

  ngOnInit() {
  }

  public emitAnEvent():void{
    this.follow.emit("follow");
  }
  public childFn():void{
    console.log("子组件的名字是：" + this._childTitle);
    alert("父组件调用子组件函数");
  }
}
