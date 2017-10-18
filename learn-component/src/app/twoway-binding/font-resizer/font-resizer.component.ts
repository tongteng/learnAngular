import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.scss']
})
export class FontResizerComponent implements OnInit {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public getBigger():void {
    if(this.size < 40) {
      this.size ++;
    }else{
      this.size = 40;
      alert("字体大小已是最大！");
    }
    this.sizeChange.emit(this.size);
  }

  public getSmaller():void {
    if(this.size > 10) {
      this.size --;
    }else{
      this.size = 10;
      alert("字体大小已是最小！");
    }
    this.sizeChange.emit(this.size);
  }

}
