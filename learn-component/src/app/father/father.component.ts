import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {
  public username:string = "tongteng";
  public userObj:any = {"username": "tongteng"};
  constructor() { }

  ngOnInit() {
  }

}
