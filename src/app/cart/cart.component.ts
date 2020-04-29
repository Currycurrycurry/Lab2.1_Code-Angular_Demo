import { Component, OnInit } from '@angular/core';
import { CartService} from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm; // 存储表单模型
  constructor(
      private cartService: CartService,
      private fromBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.fromBuilder.group({
      name: '',
      address: ''
    });


  }

  ngOnInit() {
    // 使用购物车服务的getItems方法设置这些商品
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
