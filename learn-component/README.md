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

  在父组件调用子组件时，同样绑定一个事件
  <child1 title="child1" (click)="doSomething($event)"></child1>
  public doSomething(e):void{
    alert("父级事件被触发");
    console.log(e);
  }