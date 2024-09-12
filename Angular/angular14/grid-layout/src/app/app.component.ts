import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grid-layout';
  menuItems = [
    {
      name:'L1',
      subList:['SL1','SL2','SL3']
    },
    {
      name:'L3',
      subList:['SL1','SL2','SL3']
    },
    {
      name:'L3',
      subList:['SL1','SL2','SL3']
    },
    {
      name:'L4',
      subList:['SL1','SL2','SL3']
    },
    {
      name:'L5',
      subList:['SL1','SL2','SL3']
    },
    {
      name:'L6',
      subList:['SL1','SL2','SL3']
    },
  ];
}
