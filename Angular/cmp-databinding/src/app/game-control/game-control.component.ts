import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  Start;
  numberValue = 1;
  @Output() GameStarted = new EventEmitter<{ type: string, value: number }>();
  @Output() GameStopped = new EventEmitter<{ type: boolean }>();
  constructor()
  {

  }
  onStartClicked() {
    
    this.Start = setInterval(() => {
      this.GameStarted.emit({type:this.numberValue%2==0?'even':'odd', value: this.numberValue });
      this.numberValue++;
    }, 1000);
  }

  onStopClicked() {
    clearInterval(this.Start);
    this.Start = null;
    this.numberValue = 1;
    this.GameStopped.emit({ type: true });
    
  }
}
