import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/_models/cartItem';
import { Event } from 'src/app/_models/events';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit {

  cart: CartItem[];


  deliveryPrice: number = 5;
  taxes: number = 19;
  finalPrice: number = 0;
  finalPriceTaxed: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  public getCart() {
    this.cart = this.cartService.getCart();
    this.finalPrice = this.finalPriceTaxed = 0;

    this.cart.forEach(element => {
      this.finalPrice += element.amount * element.product.price;
      this.finalPriceTaxed = this.finalPrice * (1 + (this.taxes / 100)) + this.deliveryPrice;
    })
  }

  public updateCart(amount: number, product: Event) {
    console.log('updating');
    console.log(amount);
    console.log(product);
    this.cartService.addToCart(product, amount);
    this.getCart();
  }

  public deleteFromCart(productId: number) {
    this.cartService.deleteFromCart(productId);
    this.getCart();
  }

}
