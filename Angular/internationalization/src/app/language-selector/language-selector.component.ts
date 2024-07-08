import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent {
  languages: string[] = ['bn', 'en'];
  constructor(public translate: TranslateService) {}
  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang', lang);
    console.log(localStorage.getItem('lang'));
    this.translate.use(lang);
    // this.fetchProducts();
  }
}
