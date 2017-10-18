import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {
  public currentRace:any={name:"随机种族"};  
  constructor() { }

  ngOnInit() {
  }

}
