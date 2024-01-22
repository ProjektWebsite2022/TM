import { Component, OnInit } from '@angular/core';
import { events } from 'src/app/_data/events';
import { Event } from 'src/app/_models/events';
import { Event2 } from 'src/app/_models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = events;
  events2: Event2[] = [];
  url = 'http://localhost:3000/event';

  async ngOnInit() {
    await this.loadEvent();
  }

  async loadEvent() {
    this.events2 = await this.getAllEvents();
    console.log(this.events2);
    //console.log(this.events2.Typ);
  }

  async getAllEvents(): Promise<Event2[]> {
    const response = await fetch(this.url);
      return await response.json();
  }
  constructor() { }
}
