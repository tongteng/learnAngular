ng-content内容投射
在父级组件中调用自己组件时，在子组件标签中添加要投射的内容，然后在子组件中使用<ng-content></ng-content>获取

父级组件调用子组件，传递几个标签
<child>
  <h3>仝腾是真滴帅！</h3>
  <child1 title="child1" (click)="doSomething($event)"></child1>
  <p>你说的是真滴对！</p>
</child>

子组件使用<ng-content></ng-content>使用，注意当传入多个标签时，可以使用select属性选择当前的ng-content使用父组件传进来的哪一个元素，类似于css选择器，可以class，可以标签，也可以使用其他组件，当父组件将其他组件传递进来时，跟选择标签一样，将child1组件用<ng-content select="child1"><ng-content>选择进来并使用
<div class="panel panel-primary">
    <div class="panel-heading">
      <ng-content select="h3"></ng-content>
    </div>
    <div class="panel-body">
      <ng-content select="child1"></ng-content>
    </div>
    <div class="panel-footer">
      <ng-content select="p"></ng-content>
    </div>
  </div>

  并且父组件可以给子组件传递数值，也可以捕捉到子组件触发的事件
  子组件通过@Input()收到父组件调用子组件时给子组件添加的属性
    父组件
   <child1 title="child1" (click)="doSomething($event)"></child1>
    子组件
   @Input()
   public title:string = "默认的标题";

   子组件也可以通过@Output()将子组件触发事件时，调用父组件的函数
  
  子组件
  <button class="btn btn-success" (click)="doSayHello()">点击响应事件</button>

  @Output()
  public sayHello:EventEmitter<any> = new EventEmitter<any>();
  public doSayHello():void{
    this.sayHello.emit("sayHello")
  }

  在父组件调用子组件时，这里绑定sayHello,因为这是自定义的事件，当子级元素点击时，触发该事件。
  <child1 title="child1" (sayHello)="doSomething($event)"></child1>
  public doSomething(e):void{
    alert("父级事件被触发");
    console.log(e);
  }


  那怎么获得被投影组件上面声明的一些变量啦，方法呢
  我们可以通过ContentChild获取组件
  首先我们需要引入ContentChild，以及Child1Component
  
  import { Component, OnInit, ContentChild } from '@angular/core';
  import { Child1Component } from '../child1/child1.component';
  @ContentChild(Child1Component)
  child1:Child1Component; //然后声明child1为引入进来的被投影的组件

  然后我们可以在ngAfterContentInit()钩子中，对被投影的组件进行编写
  ngAfterContentInit():void {
    console.log(this.child1);
    this.child1.title = "更改后的child1";
    this.child1.sayHello.subscribe((param)=>{
      console.log("接收到触发时的param" + param);
    })
    // this.child1.doSayHello();

  }

  当投影的组件非常多的时候，我们可以通过ContentChildren获取组件，
  我们需要引入ContentChildren以及QueryList
  import{ContentChildren, QueryList} from '...'
  @ContentChildren(Child1Component)
  child1List:QueryList<Child1Component>
  这样我们就获取到了所有组件在childList中

  然后我们可以在ngAfterContentInit()钩子中，对被投影的组件进行编写
  this.childList.forEach((childItem) => {
      childItem.sayHello.subscribe((param)=>{
        console.log(childItem.title);
      })
    })


    这个是ContentChild，，ViewChild与ContentChild完全一样，不过使用的钩子是ngAfterViewInit()
    并且在钩子中不能改变属性