import { Component, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild-accessing-component';
  @ViewChild(TimerComponent) timerComponent!: TimerComponent;
  startTimer() {
    this.timerComponent.begin();
  }
  stopTimer() {
    this.timerComponent.end();
  }
}
