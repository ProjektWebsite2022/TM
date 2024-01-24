import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { events } from 'src/app/_data/events';
import { Event } from 'src/app/_models/events';
import { Event2 } from 'src/app/_models/events';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {

  eventId: number;
  event: Event;
  event2: Event2;

  baseUrl2 = 'http://localhost:3000/eventg';
  
  formgroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  async ngOnInit(){
    this.eventId = +this.route.snapshot.paramMap.get('eventId');
    this.event = events.find(element => element.id === this.eventId);

    this.formgroup = new FormGroup({
      amount: new FormControl(null, Validators.required)
    });


    setInterval(() => {
      console.log(this.cartService.getCart());
    }, 3000)


    this.baseUrl2 = `${this.baseUrl2}?id=${this.eventId}`;
    await this.loadEvent(this.baseUrl2);
    console.log('Event', this.event2);
    console.log(this.event);
  }

  async loadEvent(url) {
    this.event2 = await this.getAllEvents(url);
    //console.log(this.events2.Typ);
  }

  async getAllEvents(url: URL): Promise<Event2> {
    const response = await fetch(url);
      return await response.json();
  }
 
  public addToCart() {
    console.log('add to cart');

    if (this.formgroup.invalid) {
      //show Error message
      return
    }

    this.cartService.addToCart(this.event2, this.formgroup.value.amount);

    this.router.navigate(['warenkorb']);

  }

}
