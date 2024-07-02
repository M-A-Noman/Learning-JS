import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mode: string = 'dark'
  onToggleMode() {
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
  }
  @HostBinding('class.dark') get Mode() {
    return this.mode==='light'
  }
}
