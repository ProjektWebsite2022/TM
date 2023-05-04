import { Injectable } from '@angular/core';
import { CartItem } from '../_models/cartItem';
import { Event } from '../_models/events';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  public addToCart(product: Event, amount: number) {
    console.log('adding or updating to Cart');
    console.log(product.id);
    // finde localstorage
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart'));
    if (!cart) cart = [];

    console.log('das ist der Cart');

    let isProductInCart = cart.find(element => element.product.id === product.id);
    if (isProductInCart) {
      cart.find(element => element.product.id === product.id).amount = amount;
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

    localStorage.setItem('cart', JSON.stringify(cart.filter(element => element.product.id != productId)));
    console.log('deleting from Cart');
  }

 
}
