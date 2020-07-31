import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template:
    '<h1> {{title}}!</h1> <button (click)="emitEvent()"> Emit an Event </button>'
})
export class HelloComponent {
  @Input() title: string;
  @Output() testEvent = new EventEmitter();

  public emitEvent() {
    this.testEvent.emit('Hey you successfully emitted an event from Child component');
  }
}
