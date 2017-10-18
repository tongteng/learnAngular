import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  public status:number = 0;
  constructor() { }

  ngOnInit() {
  }

  changeStatus():void{
    this.status ++;
    if(this.status == 4) {
      this.status = 0;
    }
  }
}
