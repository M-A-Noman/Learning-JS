import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform:'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform:'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(500)),
      // transition('highlighted => normal',animate(1000))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)',
        
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform:'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'blue',
        transform:'translateX(0) scale(.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('highlighted <=> *', [
        style({
          'background-color':'orange'
        }),
        animate(1000, style({
          borderRadius:'50px'
        })),
        animate(500)
      ]),
      // transition('highlighted => normal',animate(1000))
    ])
  ]
})
export class AppComponent {
  state='normal'
  wildState='normal'
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }
  onDelete(item) { }
  onAnimate() {
    this.state==='normal'?this.state = 'highlighted':this.state='normal';
    this.wildState==='normal'?this.wildState = 'highlighted':this.wildState='normal';
  }
  onShrink() {
    this.wildState!=='shrunken'?this.wildState='shrunken':this.wildState='normal'
  }
}
