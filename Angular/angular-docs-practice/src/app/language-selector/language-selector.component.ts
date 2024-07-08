import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang',lang);
    console.log(localStorage.getItem('lang'));
    this.translate.use(lang);
    this.fetchProducts();
  }
}
