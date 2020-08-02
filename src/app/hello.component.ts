import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template:
    `<br><br>Child: {{title}} <br><br> 
    <span>Amount available: {{counter}}</span><br><br>
    <button (click)="decrement()">Decrement 100 </button>`
})

export class HelloComponent {
  @Input() title: string;
  @Input() counter: number;

  @Output() counterChange = new EventEmitter();

  decrement(){
    this.counter -= 100;
    this.counterChange.emit(this.counter);
  }
}
