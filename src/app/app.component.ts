import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prathyusha\'s AWESOME Project';
  counter: number = 100;

  modifyCounter(){
    this.counter += 100;
  }

}
