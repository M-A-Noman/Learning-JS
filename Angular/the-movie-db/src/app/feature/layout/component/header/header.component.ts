import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   navButtons=[
    { title:'Movies',
      menuItems:['Popular','Now Playing','Upcoming','Top Ratted'],
      
    },
    { title:'TV Shows',
      menuItems:['Popular','Airing Today','On TV','Top Ratted']
    },
    { title:'People',
      menuItems:['Popular People']
    },
    { title:'More',
      menuItems:['Discussion', 'Leaderboard', 'Support', 'API']
    },
  ]
   timedOutCloser;
   targetMenuTrigger;
  mouseEnter(trigger) {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    trigger.openMenu();
  }

  mouseLeave(trigger) {
    // this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu();
    // }, 50);
  }
}
