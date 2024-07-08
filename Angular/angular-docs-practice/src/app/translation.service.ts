import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = new BehaviorSubject<any>({});
  translations$ = this.translations.asObservable();

  constructor(private http: HttpClient) {}

  loadTranslations(lang: string) {
      this.http.get(`/assets/i18n/${lang}.json`).subscribe(translations => {
        //   console.log(translations['innerBoxHeader']);
        translations['innerBoxDate'].replace('{{date}}', (new Date()).toLocaleDateString())
      this.translations.next(translations);
    });
  }
}
