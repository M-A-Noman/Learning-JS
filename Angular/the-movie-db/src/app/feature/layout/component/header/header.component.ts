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
       menuItems: ['Popular', 'Now Playing', 'Upcoming', 'Top Ratted'],
      isOpen:false
      
    },
    { title:'TV Shows',
      menuItems:['Popular','Airing Today','On TV','Top Ratted'],
       isOpen:false
    },
    { title:'People',
      menuItems:['Popular People'],
       isOpen:false
    },
    { title:'More',
      menuItems:['Discussion', 'Leaderboard', 'Support', 'API'],
       isOpen:false
    },
  ]
  currentMenu;
  selectedMenu;
  preTrigger;
  curTrigger;
  
   timedOutCloser;
   targetMenuTrigger;
  mouseEnter(trigger, index) {
    if (this.preTrigger&&this.preTrigger!=trigger) {
      this.preTrigger.closeMenu();
    }
    console.log(trigger);
    this.navButtons[index].isOpen = true;
    for (let i = 0; i < this.navButtons.length; i++){
      if (i != index) {
        this.navButtons[i].isOpen = false;
      }
    }
    console.log(this.navButtons[index]);
    this.currentMenu = this.navButtons[index].title;
    // if (this.timedOutCloser)
    // {
    //   clearTimeout(this.timedOutCloser);
    // }
    trigger.openMenu();
    
  }

  mouseLeave(trigger, index) {
    this.preTrigger = trigger;
    if (this.preTrigger != trigger) {
      
    }
    // if (!this.navButtons[index].isOpen) {
    //   trigger.closeMenu();
    // }
    // this.timedOutCloser = setTimeout(() => {
    //   trigger.closeMenu();
    // }, 50);
  }
}
