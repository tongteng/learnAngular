import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-3',
  templateUrl: './child-3.component.html',
  styleUrls: ['./child-3.component.scss']
})
export class Child3Component implements OnInit {

  public title:string = "child";

  constructor() { }

  ngOnInit() {
  }

  // ngAfterContentInit() {
  //   console.log("子层>ngAfterContentInit...")
  // }
  // ngAfterContentChecked() {
  //   console.log("子层>ngAfterContentChecked...");
  // }

  ngAfterViewInit() {
    console.log("子层>ngAfterViewInit...")
  }
  ngAfterViewChecked() {
    console.log("子层>ngAfterViewChecked...");
  }

}
