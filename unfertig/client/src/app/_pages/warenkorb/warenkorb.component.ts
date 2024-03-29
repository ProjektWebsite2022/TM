import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/_models/cartItem';
import { Event } from 'src/app/_models/events';
import { Event2 } from 'src/app/_models/events';
import { CartService } from 'src/app/_services/cart.service';
import { ContactComponent } from 'src/app/_components/contact/contact.component';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
// npm install --save @emailjs/browser
const stripe = require('stripe')('sk_test_51N4H04E6HRSadoukZmnWR4QOXSLMpLA8K38JEak15afw1zih8k8MUgtcoiPONmVlwVOb1zBz6JoITxqAKs68olYV004dkEq1qq')

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit {
  @ViewChild('AdresseWarenkorb') contactComponent: ContactComponent;

  url = 'http://localhost:3000/Bestellung';
  Fehlermeldung: String;

  getDataFromKontakt() {
    console.log(this.contactComponent.AdresseAnWarenkorb());
    const adresse = this.contactComponent.AdresseAnWarenkorb();
    if (adresse && Object.keys(adresse).length === 0) {
      console.log('Leer');
    }
  }

  cart: CartItem[];


  taxes: number = 19;
  finalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  public getCart() {
    this.cart = this.cartService.getCart();
    this.finalPrice = 0;

    this.cart.forEach(element => {
      this.finalPrice += element.amount * element.product.Preis;
    })
  }

  public updateCart(amount: number, product: Event2) {
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

  public async processPayment() {
    console.log('processing payment');

    // line Items erstellen.
    let lineItems = []; 

    for (let cartItem of this.cart) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          tax_behavior: 'exclusive',
          product_data: {
            name: cartItem.product.Titel,
          },
          unit_amount: cartItem.product.Preis * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
        quantity: cartItem.amount,
      })
    }

    // hier stripe checkout aufrufen
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:4200/buchungsbestaetigung',
      cancel_url: 'http://localhost:4200/warenkorb',
    });
    window.location.href = session.url;
  }

  // E-Mailfunktion
  public sendEmail(){
    const adresse = this.contactComponent.AdresseAnWarenkorb();
    //Initialisierung mit dem Public Key
    emailjs.init('JVWH3mFV7QJQMSXoH');
    //Framework mit vorgefertigtem Template wird aufgerufen, Parameter aus dem Kontaktformular werden übergeben.
    emailjs.send("service_bc47623","template_0s4vibr",{
      useremail: adresse.email,
      userName: adresse.firstName,
      });
  }

  // Bestelldaten senden
  sendEvent(Bestellung) {
    this.http.post(this.url, Bestellung).subscribe(
      response => console.log('Event gesendet', response),
      error => console.error('Fehler beim Senden des Events', error)
    );
  } 


  public BestellungAbschliesen(){

    console.log(this.contactComponent.AdresseAnWarenkorb());
    // Hier drin E-Mailadresse in adresse
    const adresse = this.contactComponent.AdresseAnWarenkorb();

    if (adresse && Object.keys(adresse).length === 0) {
      console.log('Leer');
      this.Fehlermeldung = 'Bitte fülle das Kontaktformular richtig aus!';
    } else {
      // line Items erstellen.
      let lineItems = []; 

      for (let cartItem of this.cart) {
        lineItems.push({
          name: cartItem.product.Titel,
          unit_amount: cartItem.product.Preis * 100,
          quantity: cartItem.amount,
        })
      }
      lineItems.push(adresse);
      this.sendEvent(lineItems);
      this.processPayment();
      // Email Funktion
      this.sendEmail();
    }
  }

}
