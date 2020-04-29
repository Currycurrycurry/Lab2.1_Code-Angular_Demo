import { Component, OnInit } from '@angular/core';
// 导入Input
import { Input} from '@angular/core';

// 导入Output和EventEmitter,前者方便Outout装饰器的定义，后者用于实例化对象事件发射器
import { Output, EventEmitter} from '@angular/core';
// 装饰器函数：用于为组件指定元数据
@Component({
  selector: 'app-product-alerts', // 组件的选择器（css元素选择器） 在父组件的模板中匹配html元素的名称，以进行识别。
  templateUrl: './product-alerts.component.html', // 组件模板文件的位置
  styleUrls: ['./product-alerts.component.css'] // 组件私有css样式表文件的位置
})
// 方便在其余地方导入它（如：AppModule）
export class ProductAlertsComponent implements OnInit {
  // input装饰器指出其属性值使用该组件的父组件商品列表组件中传入的
  @Input() product;

  @Output() notify = new EventEmitter();

  constructor() { }

  // 生命周期钩子，在创建完组件后立即调用（放置初始化逻辑）
  ngOnInit() {
  }



}
