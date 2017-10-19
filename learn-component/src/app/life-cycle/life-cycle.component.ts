import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent{
  public logs:Array<String> = [];
  @Input()
  public title:string = "默认的标题";
  constructor() {
    this.logs.push("constructor...")
  }
  ngOnInit() {
    this.logs.push("ngOnInit...");
  }
  ngOnChanges() {
    this.logs.push("ngOnChanges...");
  }
  ngDoCheck() {
    this.logs.push("ngDoCheck...");
  }
  ngAfterContentInit() {
    this.logs.push("ngAfterContentInit...");
  }
  ngAfterContentChecked() {
    this.logs.push("ngAfterContentChecked...");
  }
  ngAfterViewInit() {
    this.logs.push("ngAfterViewInit...");
  }
  ngAfterViewChecked() {
    this.logs.push("ngAfterViewChecked...");
  }
  ngOnDestory() {
    this.logs.push("ngOnDesory...");
  }

}
