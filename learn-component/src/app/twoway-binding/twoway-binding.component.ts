import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent implements OnInit {
  public fontSize:number = 14;
  constructor() { }

  ngOnInit() {
  }

}
