import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

import { products } from "../products";
// 导入购物车服务
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
      private route: ActivatedRoute, // 专门用于由Angular路由器加载的每个路由组件，包含关于该路由、路由参数以及该路由关联的其他数据的信息。
      // 通过把购物车服务注入到这里的constructor中来注入它
      private cartService: CartService
  ) { }

  ngOnInit() {
    // 订阅路由参数，并且根据productId获取该产品
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
