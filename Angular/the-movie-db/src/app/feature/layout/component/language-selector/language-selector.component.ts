import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  @ViewChild(MatMenuTrigger, { static: true }) languageSelectorTrigger!: MatMenuTrigger;

  languages = [
    { viewValue: 'en-US', value: 'EN' },
    { viewValue: 'bn-BD', value: 'BN' },
    { viewValue: 'in-IN', value: 'IN' },
  ];

  menuClosed() {
    // Reopen the menu if it was closed without selecting a language
    // if (!this.languageSelectorTrigger.menuOpen) {
    //   setTimeout(() => {
        this.languageSelectorTrigger.openMenu();
      // }, 0);
    // }
  }
}
