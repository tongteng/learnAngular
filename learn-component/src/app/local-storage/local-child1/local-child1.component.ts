import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child1',
  templateUrl: './local-child1.component.html',
  styleUrls: ['./local-child1.component.scss']
})
export class LocalChild1Component implements OnInit {
  public point:string = "请点击写值按钮将值写入localStorage";
  constructor() { }

  ngOnInit() {
  }

  public writeValue():void{
    window.localStorage.setItem("json", JSON.stringify({name: "tongteng", sex: "male"}));
    this.point = "写入成功";
  }

}
