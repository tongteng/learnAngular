import { Component, OnInit } from '@angular/core';
// import { flyIn } from '../animations/fly-in';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeInDown } from 'ng-animate';
@Component({
  selector: 'fly-in',
  templateUrl: './fly-in.component.html',
  styleUrls: ['./fly-in.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeInDown', [transition('* => *', useAnimation(fadeInDown))])
  ]
})
export class FlyInComponent implements OnInit {
  bounce:any;
  fadeInDown:any;
  constructor() { }

  ngOnInit() {
  }

}
