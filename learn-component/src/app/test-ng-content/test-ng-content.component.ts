import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-ng-content',
  templateUrl: './test-ng-content.component.html',
  styleUrls: ['./test-ng-content.component.scss']
})
export class TestNgContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Content是先触发父层的钩子，然后触发子层的钩子，而View与content相反

  ngAfterContentInit() {
    // console.log("父层>ngAfterContentInit");
  }
  ngAfterContentChecked() {
    // console.log("父层>ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("父层>ngAfterViewInit...")
  }
  ngAfterViewChecked() {
    console.log("父层>ngAfterViewChecked...");
  }
}
