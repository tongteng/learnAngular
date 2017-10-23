import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.scss']
})
export class Child1Component implements OnInit {
  // @Input()
  public title:string = "默认的标题";
  constructor() { }

  ngOnInit() {
  }

  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  public triggerEvent():void{
    this.btnClick.emit("第一个子组件的点击事件...")
  }

}
