import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqs: any[] = [];
  isOpen: Map<string, boolean> = new Map<string, boolean>();
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    // this.loadFaqs();
  }

  

  loadFaqs() {
    // this.translate.get('FAQS').subscribe((faqs: any[]) => {
    //   this.faqs = faqs.map((faq) => ({ ...faq, isOpen: false }));
    // });
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
