import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'none-mode',
  encapsulation:ViewEncapsulation.None,//none模式
  templateUrl: './none-mode.component.html',
  styleUrls: ['./none-mode.component.scss']
})
export class NoneModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
