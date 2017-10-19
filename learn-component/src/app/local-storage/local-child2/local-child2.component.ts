import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'local-child2',
  templateUrl: './local-child2.component.html',
  styleUrls: ['./local-child2.component.scss']
})
export class LocalChild2Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public readValue():void{
    var json = window.localStorage.getItem("json");
    var value = JSON.parse(json);
    console.log(value.name);
    console.log(value.sex);
    window.localStorage.removeItem("json");
  }

}
