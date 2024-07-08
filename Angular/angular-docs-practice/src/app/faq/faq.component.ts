import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    { question: 'What is the return policy?', answer: 'Our return policy is 30 days with a receipt.', isOpen: false },
    { question: 'How do I track my order?', answer: 'You can track your order using the tracking number provided in your confirmation email.', isOpen: false },
    { question: 'Can I purchase items again?', answer: 'Yes, you can repurchase items by visiting your order history.', isOpen: false },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
