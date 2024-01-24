import { Injectable } from '@angular/core';
import { CartItem } from '../_models/cartItem';
import { Event } from '../_models/events';
import { Event2 } from 'src/app/_models/events';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  public addToCart(product: Event2, amount: number) {
    console.log('adding or updating to Cart');
    console.log(product.Eventnummer);
    // finde localstorage
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart'));
    if (!cart) cart = [];

    console.log('das ist der Cart');

    let isProductInCart = cart.find(element => element.product.Eventnummer === product.Eventnummer);
    if (isProductInCart) {
      cart.find(element => element.product.Eventnummer === product.Eventnummer).amount = amount;
    } else {
      cart.push({
        product: product,
        amount: amount
      })
    }
    //check ob drin

    localStorage.setItem('cart', JSON.stringify(cart));
    // ersetzen oder hinzufügen
  }

  public deleteFromCart(productId: number) {

    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart'));

    localStorage.setItem('cart', JSON.stringify(cart.filter(element => element.product.Eventnummer != productId)));
    console.log('deleting from Cart');
  }

 
}
