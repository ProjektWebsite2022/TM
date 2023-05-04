import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { events } from 'src/app/_data/events';
import { Event } from 'src/app/_models/events';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {

  eventId: number;
  event: Event;

  formgroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('eventId');
    this.event = events.find(element => element.id === this.eventId);

    this.formgroup = new FormGroup({
      amount: new FormControl(null, Validators.required)
    });


    setInterval(() => {
      console.log(this.cartService.getCart());
    }, 3000)
  }

  public addToCart() {
    console.log('add to cart');

    if (this.formgroup.invalid) {
      //show Error message
      return
    }

    this.cartService.addToCart(this.event, this.formgroup.value.amount);

    this.router.navigate(['warenkorb']);

  }

}
