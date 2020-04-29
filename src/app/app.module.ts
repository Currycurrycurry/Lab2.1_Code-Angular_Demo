// module包含可供整个应用使用的导入对象和功能
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

// 元数据初始化路由器，监听浏览器地址的变化
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, //以便全局注册
    ReactiveFormsModule, // 其中提供了FromBuilder服务
    // 使用路由配置
    // forRoot的作用：在应用的顶级配置，提供路由所需要的服务提供商和指令，基于浏览器的当前url执行首次导航
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
        // 添加商品详情路由规则
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent }, // 新的组件没有link到其他组件，但可以通过输入其路由指定的url在预览窗格中看到它的模板
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    AdBannerComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/