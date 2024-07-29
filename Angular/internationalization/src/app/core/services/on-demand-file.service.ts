import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  Observable,
  map,
  catchError,
  of,
  switchMap,
  shareReplay,
  BehaviorSubject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class onDemandFileService {
  onDataChanges = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {}


  private translationsCache: { [key: string]: any[] } = {};

  getFileOnDemand(fileName: string): Observable<any> {
    const lang =
      this.translateService.currentLang || this.translateService.defaultLang;
    const externalUrl = `https://raw.githubusercontent.com/Noman-1533/i18n/main/${lang}/${fileName}`;

    // Check if the translations are already cached
    if (this.translationsCache[lang]) {
      return of(this.translationsCache[lang]);
    }
    return this.http.get<any[]>(externalUrl).pipe(
      map((externalTranslations) => {
        const existingTranslations =
          this.translateService.store.translations[lang] || {};
        const mergedTranslations = {
          ...existingTranslations,
          ...externalTranslations,
        };
        this.translationsCache[lang] = mergedTranslations;

        // Set the merged translations
        this.translateService.setTranslation(lang, mergedTranslations, true);

        return of(mergedTranslations);
      }),
      catchError((error) => {
        console.error('Error fetching external translations', error);
        return of({});
      })
    );
  }
}
