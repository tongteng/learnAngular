import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'brother-2',
  templateUrl: './brother-2.component.html',
  styleUrls: ['./brother-2.component.scss']
})
export class Brother2Component implements OnInit {
  public events:Array<any>=[];

  constructor(public eventBusService:EventBusService) {

  }

  ngOnInit() {
    this.eventBusService.eventBus.subscribe((value)=>{
      this.events.push(value+"-"+new Date());
    });
  }
}
