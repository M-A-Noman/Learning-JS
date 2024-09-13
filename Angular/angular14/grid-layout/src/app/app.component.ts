import { Component } from '@angular/core';
import { faBars,faSortUp } from '@fortawesome/free-solid-svg-icons';
import {  faBell } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grid-layout';
  menuOpen = true;
  menuItems = [
    {
      menuButtonTitle:'Overview',
      menuButtonNavigationLink:'/overview',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Location',
      menuButtonNavigationLink:'/location',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Usage',
      menuButtonNavigationLink:'/usage',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Run Time',
      menuButtonNavigationLink:'/run-time',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Admin',
      menuButtonNavigationLink:'/admin',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Service',
      menuButtonNavigationLink:'/service',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
  ]
  userName:string='USER@GMAIL.COM'
  icons={
      faBars:faBars,
      faBell:faBell,
      faSortUp:faSortUp
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
