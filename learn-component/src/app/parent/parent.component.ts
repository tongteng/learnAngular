import { Component, OnInit, ViewChild } from '@angular/core';
import { Child11Component } from './child-11/child-11.component';
import { Child22Component } from './child-22/child-22.component';
@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild(Child11Component)
  child11:Child11Component

  @ViewChild(Child22Component)
  child22:Child22Component
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.child11.setTime(new Date().toLocaleString());
      this.child22.setTime(new Date().toLocaleString());
    }, 1000)
  }



}
