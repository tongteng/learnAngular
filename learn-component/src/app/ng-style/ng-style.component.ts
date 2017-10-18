import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {
  public currentStyle:object = {};
  public value:string = "修改内联样式";
  public isBolder:boolean = false;
  public isBigger:boolean = false;
  public isBgColor:boolean = false;
  public isColor:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public setCurrentStyle():void{
    this.currentStyle = {
      "font-weight": (this.isBolder = !this.isBolder) ? 1000 : 200,
      "font-size": (this.isBigger = !this.isBigger) ? "30px" : "16px",
      "background-color": (this.isBgColor = !this.isBgColor) ? "#0f0" : "#fff",
      "color": (this.isColor = !this.isColor) ? "#f00" : "#000"
    }
    if(this.isBolder) {
      this.value = "复原内联样式";
    }else{
      this.value = "修改内联样式";
    }
  }

}
