import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqs: any[] = [];
  languages: string[] = ['bn', 'en'];
  isOpen: Map<string, boolean> = new Map<string, boolean>();
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.loadLanguage();
    // this.loadFaqs();
  }

  loadLanguage() {
    const lang =  'en';
    this.translate.use(lang);
    // this.translate.use(lang);
  }

  loadFaqs() {
    // this.translate.get('FAQS').subscribe((faqs: any[]) => {
    //   this.faqs = faqs.map((faq) => ({ ...faq, isOpen: false }));
    // });
  }

  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.loadFaqs();
  }

  toggleFAQ(index: number) {
    let key = "Q" + index;
   
    if (!this.isOpen.has(key)) {
      this.isOpen.set(key, true);
    }
    else {
      const value = this.isOpen.get(key);
      this.isOpen.set(key, !value);
    }
    // this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
