import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faBars, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grid-layout';
  menuOpen = true;
  isSubmenuOpen=false;
  menuItems = [
    {
      menuButtonTitle: 'Overview',
      menuButtonNavigationLink: '/overview',
      subMenu: [
        {
          subMenuButtonTitle: 'subMenu 1',
          subMenuButtonNavigationLink: '/sub-menu-1',
        },
        {
          subMenuButtonTitle: 'subMenu 2',
          subMenuButtonNavigationLink: '/sub-menu-2',
        },
      ],
    },
    {
      menuButtonTitle: 'Location',
      menuButtonNavigationLink: '/location',
      subMenu: [
        {
          subMenuButtonTitle: 'subMenu 1',
          subMenuButtonNavigationLink: '/sub-menu-1',
        },
        {
          subMenuButtonTitle: 'subMenu 2',
          subMenuButtonNavigationLink: '/sub-menu-2',
        },
      ],
    },
    {
      menuButtonTitle: 'Usage',
      menuButtonNavigationLink: '/usage',
      subMenu: [
        {
          subMenuButtonTitle: 'subMenu 1',
          subMenuButtonNavigationLink: '/sub-menu-1',
        },
        {
          subMenuButtonTitle: 'subMenu 2',
          subMenuButtonNavigationLink: '/sub-menu-2',
        },
      ],
    },
    {
      menuButtonTitle: 'Run Time',
      menuButtonNavigationLink: '/run-time',
      subMenu: [
        {
          subMenuButtonTitle: 'subMenu 1',
          subMenuButtonNavigationLink: '/sub-menu-1',
        },
        {
          subMenuButtonTitle: 'subMenu 2',
          subMenuButtonNavigationLink: '/sub-menu-2',
        },
      ],
    },
    {
      menuButtonTitle: 'Admin',
      menuButtonNavigationLink: '/admin',
      subMenu: [
        {
          subMenuButtonTitle: 'subMenu 1',
          subMenuButtonNavigationLink: '/sub-menu-1',
        },
        {
          subMenuButtonTitle: 'subMenu 2',
          subMenuButtonNavigationLink: '/sub-menu-2',
        },
      ],
    },
    {
      menuButtonTitle: 'Service',
      menuButtonNavigationLink: '/service',
      subMenu: [
        {
          subMenuButtonTitle: 'subMenu 1',
          subMenuButtonNavigationLink: '/sub-menu-1',
        },
        {
          subMenuButtonTitle: 'subMenu 2',
          subMenuButtonNavigationLink: '/sub-menu-2',
        },
      ],
    },
  ];
  profileItems = [
    {
      profileItemName: 'Profile',
      profileItemNavigationLink: '/profile',
    },
    {
      profileItemName: 'Account',
      profileItemNavigationLink: '/account',
    },
  ];
  alertItems = [
    {
      alertItemName: 'Alert 1',
      alertItemNavigationLink: '/alert/1',
    },
    {
      alertItemName:'Alert 2',
      alertItemNavigationLink:'/alert/2'
    }
  ];
  numberOfAlerts = 25;
  userName: string = 'USER@GMAIL.COM';
  icons = {
    faBars: faBars,
    faBell: faBell,
    faSortUp: faSortUp,
  };

  isProfileOpen: boolean = false;
  isAlertOpen:boolean=false;

  @ViewChild('alertContainer',{static:false}) alertContainer!:ElementRef;
  @ViewChild('profileContainer',{static:false}) profileContainer!:ElementRef;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  toggleSubmenu(){
    this.isSubmenuOpen=!this.isSubmenuOpen
  }
  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }
  toggleAlert(){
    
    this.isAlertOpen=!this.isAlertOpen;
  }

  @HostListener('document:click',['$event']) handleOutsideClick(event:MouseEvent){
    if(this.alertContainer&&!this.alertContainer.nativeElement.contains(event.target)){
      this.isAlertOpen=false;
    }
    if(this.profileContainer&&!this.profileContainer.nativeElement.contains(event.target)){
      this.isProfileOpen=false;
    }
  }
}
