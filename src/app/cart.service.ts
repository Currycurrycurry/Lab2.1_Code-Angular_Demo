import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import {forEachToken} from "tslint";

// 这个providedIn语法支持摇树优化
@Injectable({
  providedIn: 'root'
})
export class CartService {

  // 把当前商品的数组存储在购物车中
  items = [];

  // 定义添加、返回、清除购物车商品的方法
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // 使用HttpClient#get()方法检索配送数据（类型和价格）
  getShippingPrices() {
    // console.log("http client: " + this.http.get('./assets/shipping.json'));
    return this.http.get('./assets/shipping.json');
  }
  constructor(
      private http: HttpClient
  ) { }
}
