import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  public currentTime = new Date();
  constructor() { }

  ngOnInit() {
    window.setInterval(()=>{
      this.currentTime = new Date();
    },1000)
  }

}
