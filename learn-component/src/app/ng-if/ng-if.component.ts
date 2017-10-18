import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
  public value:string = "不显示";
  public isShow:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.isShow = !this.isShow;
    if(this.isShow) {
      this.value = "不显示";
    }else{
      this.value = "显示";
    }
  }

}
