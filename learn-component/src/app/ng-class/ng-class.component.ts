import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  public currentClass:Object = {};
  public isbolder:boolean = true;
  public isbigger:boolean = true;
  public isspecial:boolean = true;
  public value:string = "添加Class样式";
  constructor() { }

  ngOnInit() {
  }

  public setCurrentClass():void{
    this.currentClass = {
      "bolder": this.isbolder=!this.isbolder,
      "bigger": this.isbigger=!this.isbigger,
      "special": this.isspecial=!this.isspecial
    }
    if(this.isbolder) {
      this.value = "删除Class样式";
    }else{
      this.value = "添加Class样式";
    }
  }

}
