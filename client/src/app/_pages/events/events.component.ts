import { Component, OnInit } from '@angular/core';
import { events } from 'src/app/_data/events';
import { Event } from 'src/app/_models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = events;

  isEventSearchOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
