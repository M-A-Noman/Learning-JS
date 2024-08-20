import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navButtons = [
    {
      title: 'Movies',
      menuItems: [
        { title: 'Popular', navLink: 'list/movie/popular' },
        { title: 'Now Playing', navLink: 'list/movie/now_playing' },
        { title: 'Upcoming', navLink: 'list/movie/upcoming' },
        { title: 'Top Rated', navLink: 'list/movie/top_rated' },
      ],
      isOpen: false,
    },
    {
      title: 'TV Shows',
      menuItems: [
        { title: 'Popular', navLink: 'list/tv/popular' },
        { title: 'Airing Today', navLink: 'list/tv/airing_today' },
        { title: 'On TV', navLink: 'list/tv/on_tv' },
        { title: 'Top Rated', navLink: 'list/tv/top_rated' },
      ],
      isOpen: false,
    },
    {
      title: 'People',
      menuItems: [
        { title: 'Popular People', navLink: 'list/people/popular_people' },
      ],
      isOpen: false,
    },
    {
      title: 'More',
      menuItems: [
        { title: 'Discussion',navLink:'' },
        { title: 'Leaderboard',navLink:'' },
        { title: 'Support' ,navLink:''},
        { title: 'API',navLink:'' },
      ],
      isOpen: false,
    },
  ];
  currentMenu;
  selectedMenu;
  preTrigger;
  curTrigger;

  timedOutCloser;
  targetMenuTrigger;

  constructor(private router: Router) {}

  mouseEnter(trigger, index) {
    if (this.preTrigger && this.preTrigger != trigger) {
      this.preTrigger.closeMenu();
    }
    this.navButtons[index].isOpen = true;
    for (let i = 0; i < this.navButtons.length; i++) {
      if (i != index) {
        this.navButtons[i].isOpen = false;
      }
    }
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

  onClick(url: string = '') {
    this.router.navigate([url]);
  }
}
