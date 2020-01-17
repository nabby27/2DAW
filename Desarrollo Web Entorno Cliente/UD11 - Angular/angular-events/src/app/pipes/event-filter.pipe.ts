import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../interfaces/event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(events: Event[], filterBy: string): any {
    var res: Event[] = [];
    if (!filterBy) {
      return events;
    }
    events.forEach(event => {
      if (event.description.toLowerCase().indexOf(filterBy) !== -1 ||
          event.title.toLowerCase().indexOf(filterBy) !== -1) {
        res.push(event)
      }
    });

    return res;
  }

}
