import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent implements OnInit {
  languages: string[] = ['bn', 'en'];
  constructor(public translate: TranslateService) {}
  ngOnInit(): void {
    this.loadLanguage();
  }
  loadLanguage() {
    const lang = 'en';
    this.translate.use(lang);
  }
  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
