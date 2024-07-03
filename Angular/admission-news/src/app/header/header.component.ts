import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggle: boolean = false;
  headerItems: string[] = [
    'Home',
    'Admission Circular',
    'Admission Form',
    'Payment Instruction',
    'Admission Result',
    'Results',
  ];

  constructor(private router:Router){}
  onToggle() {
    this.toggle = !this.toggle;
  }
  onClickHeaderItem(index: number) {
    let navigationLinkText: string = this.headerItems[index].toLocaleLowerCase().replace(/\s+/g, '-');
    if(this.toggle)
    this.onToggle()
    this.router.navigate([navigationLinkText]);
    // console.log(navigationLinkText);
  }
}
