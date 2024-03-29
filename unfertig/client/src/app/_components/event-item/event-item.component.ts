import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/_models/events';
import { Event2 } from 'src/app/_models/events';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event;
  @Input() event2: Event2;

  constructor() { }

  ngOnInit(): void {
  }

}
