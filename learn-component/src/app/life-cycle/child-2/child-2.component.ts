import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.scss']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    console.log("child1ngOnChecked...")
  }

}
