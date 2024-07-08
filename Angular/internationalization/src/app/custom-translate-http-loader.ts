import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export class CustomTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, private baseUrl: string, private files: string[]) {}

  public getTranslation(lang: string): Observable<any> {
    const requests = this.files.map(file => this.http.get(`${this.baseUrl}${lang}${file}`));
    
    return forkJoin(requests).pipe(
      map(response => {
        return response.reduce((acc, res) => {
          return { ...acc, ...res };
        }, {});
      })
    );
  }
}
