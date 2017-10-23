在动态创建组件的时候，要注意在app.module.ts中的@NgModule添加  entryComponents:[Child1Component]

父级元素中要从@angular/core中引入下面几个包
ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentRef
还要把动态创建的组件引入进来，import { ChildComponent } from '...'
然后在html中需要动态创建的元素的wrapper元素中加入   <div #dyncomp></div>
然后在ts中属性装饰器@ViewChild获取#dyncomp     
@ViewChild("dyncomp",{read:ViewContainerRef})
dyncomp:ViewContainerRef;

声明要创建的组件comp1, comp2
  comp1:ComponentRef<Child1Component>;
  comp2:ComponentRef<Child1Component>;

还要在构造函数中声明resolver
constructor(
	private resolver:ComponentFactoryResolver) {
}

然后在ngAfterContentInit(){}钩子中进行创建
ngAfterContentInit(){
    console.log("动态创建组件的实例...");
    const childComp=this.resolver.resolveComponentFactory(Child1Component);
    this.comp1=this.dyncomp.createComponent(childComp); 
    console.log(this.comp1);
    this.comp1.instance.title="父层设置的新标题";	//向子元素传值可以通过.instance，但是需要在创建组件中声明
}

createComponent(childComp,index) //可以传递多个参数，index指的是当插入多个子组件时，这个插入组件排列的位置。还有其他参数可以查看文档


当子组件声明一个点击事件  btnClick:EventEmitter<string>=new EventEmitter<string>();  并emit     this.btnClick.emit("第一个子组件的点击事件...")
我们可以在父级组件中用 this.comp1.instance.btnClick.subscribe((param)=>{
      console.log("--->"+param);
    });
  this.xxx.instance.xxx.subscribe((param) => {console.log("--->" + param)})获取


那么创建的组件怎么销毁呢。创建的组件上面有destroy方法
    this.comp1.destroy();
