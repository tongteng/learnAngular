import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  public love:Array<any> = [
    {name: "仝腾"},
    {name: "华蕊"},
    {name: "隋金磊"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
