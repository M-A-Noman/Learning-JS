

import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export class CustomTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, private baseUrl: string) { }

  public getTranslation(lang: string): Observable<any> {

    return this.http.get<any[]>(`${this.baseUrl}contents/${lang}`).pipe(
      map((files) => files.map((file) => file.download_url)),
      switchMap((urls) => {
        const requests = urls.map((url) => this.http.get(url));
        return forkJoin(requests);
      }),
      map((response) => {
        return response.reduce((acc, res) => {
          return { ...acc, ...res };
        }, {});
      })
    )
  }
}

// codes for logging and seeing the output


// export class CustomTranslateHttpLoader implements TranslateLoader {
//   constructor(private http: HttpClient, private baseUrl: string) { }

//   public getTranslation(lang: string): Observable<any> {
    // this.http.get<any[]>(`${this.baseUrl}contents/${lang}`).pipe(
    //   map((files) => {
    //     console.log('files are =>', files);
    //     files.map((file) => {
    //       file.download_url;
    //       console.log('file are', file)
    //       console.log('download_url are =>', file.download_url);
    //     });
    //   })
    // ).subscribe();
    // Fetch the list of files in the language directory


    // return this.http.get<any[]>(`${this.baseUrl}contents/${lang}`).pipe(
    //   // Extract the file names and construct the URLs to fetch their content
    //   map((files) => files.map((file) => file.download_url)),
    //   // Fetch the content of each file
    //   switchMap((urls) => {
    //     const requests = urls.map((url) => {
    //       console.log('single url => ',url)
    //       return this.http.get(url)
    //     });
    //     console.log('urls are ', urls);
    //     console.log("request ares =>",requests)
    //     return forkJoin(requests);
    //   }),
    //   // Merge the content of all files into a single object
    //   map((response) => {
    //     console.log(response)
    //     return response.reduce((acc, res) => {
    //       console.log('acc=>', acc);
    //       console.log('res', res);
    //       return { ...acc, ...res };
    //     }, {});
    //   })
    // );

    
// }

// code for getting all file using filename array

// import { HttpClient } from '@angular/common/http';
// import { TranslateLoader } from '@ngx-translate/core';
// import { Observable, forkJoin } from 'rxjs';
// import { map } from 'rxjs/operators';

// export class CustomTranslateHttpLoader implements TranslateLoader {
//   constructor(private http: HttpClient, private baseUrl: string, private files: string[]) {}

//   public getTranslation(lang: string): Observable<any> {
//     const requests = this.files.map(file => this.http.get(`${this.baseUrl}${lang}${file}`));

//     return forkJoin(requests).pipe(
//       map(response => {
//         return response.reduce((acc, res) => {
//           return { ...acc, ...res };
//         }, {});
//       })
//     );
//   }
// }