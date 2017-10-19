import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'brother-1',
  templateUrl: './brother-1.component.html',
  styleUrls: ['./brother-1.component.scss']
})
export class Brother1Component implements OnInit {
  constructor(public EventBusService: EventBusService) { }

  ngOnInit() {

  }

  public triggerEventBus():void{
    this.EventBusService.eventBus.next("第一个组件触发的时间：")
  }
}
