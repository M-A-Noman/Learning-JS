

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { Observable, map, switchMap, forkJoin, catchError, of } from "rxjs";
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn:'root'
})
export class commonFileService{
  constructor(private http: HttpClient) { }
  getCommonFiles(baseUrl:string,lang:string): Observable<any>{

    const token = environment.githubToken;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

        return this.http.get<any[]>(`${baseUrl}contents/${lang}`, { headers }).pipe(
          map((files) =>
            files
              .filter((file) => file.name !== 'faq.json')
              .map((file) => file.download_url)
          ),
          switchMap((urls) => {
            const requests = urls.map((url) => this.http.get(url));
            return forkJoin(requests);
          }),
          map((response) => {
            return response.reduce((acc, res) => {
              return { ...acc, ...res };
            }, {});
          })
        );
      }
}


@Injectable({
  providedIn: 'root'
})
export class onDemandFileService{
    constructor(private http: HttpClient, private translateService: TranslateService) { }
  getFileOnDemand(): Observable<any> {
    const lang = this.translateService.currentLang || this.translateService.defaultLang;
    const externalUrl = `https://raw.githubusercontent.com/Noman-1533/i18n/main/${lang}/faq.json`;
    // const localTranslations = this.translateService.getTranslation(language);

    return this.http.get(externalUrl).pipe(
      map(externalTranslations => {
        // Get the existing translations and merge with external
        const existingTranslations = this.translateService.store.translations[lang] || {};
        console.log('Existing translations:', existingTranslations);

        const mergedTranslations = { ...existingTranslations, ...externalTranslations };
        // Set the merged translations
        this.translateService.setTranslation(lang, mergedTranslations, true);
        console.log(mergedTranslations)
        return mergedTranslations;
      }),
      catchError(error => {
        console.error('Error fetching external translations', error);
        return of({});
      })
    );
  }
}
