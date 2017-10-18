import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'value-binding',
  templateUrl: './value-binding.component.html',
  styleUrls: ['./value-binding.component.scss']
})
export class ValueBindingComponent implements OnInit {

  public imgSrc:string = "./assets/img/1.jpg";
  public index:number = 1;
  constructor() { }

  ngOnInit() {
  }

  public changeImg():void{
    if( this.index++ % 2 == 0 ) {
      this.imgSrc = "./assets/img/1.jpg";
    }else{
      this.imgSrc = "./assets/img/2.jpg";
    }
  }

}
