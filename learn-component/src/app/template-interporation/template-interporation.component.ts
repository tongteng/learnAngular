import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-interporation',
  templateUrl: './template-interporation.component.html',
  styleUrls: ['./template-interporation.component.scss']
})
export class TemplateInterporationComponent implements OnInit {
  public gameTitle:string = "Welcome to LOL";
  constructor() { }

  ngOnInit() {
  }

  public getName(name):string  {
    return name;
  }

}
