import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-docs-practice';
  secondRef: string;
 

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    // this.translationService.translations$.subscribe(translations => {
    //   this.translations = translations;
    // });

    // // Load default language
    // this.translationService.loadTranslations('en');
  }

  
}
