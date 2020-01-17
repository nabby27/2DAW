import { Component, OnInit } from '@angular/core';
import { Event } from '../interfaces/event';

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {

  newEvent: Event = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  events: Event[] = [
    {
      title: 'Evento de prueba',
      image: '../../assets/event1.jpg',
      date: '2019-03-15',
      description: 'Nos lo pasaremos genial',
      price: 23.95
    },
    {
      title: 'Evento de prueba 2',
      image: '../../assets/event2.jpg',
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

  addEvent() {
    this.events.push(this.newEvent);
    console.log(this.events);
  }

  changeImage(fleInput: HTMLInputElement) {
    if (!fleInput.files || fleInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fleInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result;
    });
  }

}
