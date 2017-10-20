import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.scss']
})
export class Child1Component{
  @Input() 
  public username: string = "";
  @Input()
  public userObj: any = {};
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("ngOnChanges...");
  }

  ngDoCheck() {
    console.log("ngDoCheck...");
  }

}
