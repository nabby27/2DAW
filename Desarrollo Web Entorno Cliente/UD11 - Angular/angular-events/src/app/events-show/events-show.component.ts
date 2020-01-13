import { Component, OnInit } from '@angular/core';
import { Event } from '../interfaces/event';

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {

  events: Event[] = [
    {
      title: 'Evento de prueba',
      image: '',
      date: '2019-03-15',
      description: 'Nos lo pasaremos genial',
      price: 23.95
    },
    {
      title: 'Evento de prueba 2',
      image: '',
      date: '2019-03-21',
      description: 'Este es peor',
      price: 15.5
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  existEvents() {
    return this.events && this.events.length > 0;
  }

}
