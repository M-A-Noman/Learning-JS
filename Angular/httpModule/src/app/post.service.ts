import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
    posts: Post[];
    error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPosts(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://angular-complete-guideline-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((response) => {
        console.log(response);
      },
          (error) => {
              this.error.next(error.message);
      }
    );
    }
    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        
        searchParams = searchParams.append('customKey', 'value');

        
        return this.http.get<{ [key: string]: Post }>('https://angular-complete-guideline-default-rtdb.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                params: new HttpParams().set('print', 'pretty'),
                // params:searchParams
            }
        )
      .pipe(map(
        (response) => {
          const postArray :Post[]= [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              postArray.push({...response[key],id:key})
            }
          }
          return postArray;
        })
      ) 
    }
    onDelete() {
        return this.http.delete('https://angular-complete-guideline-default-rtdb.firebaseio.com/posts.json')
            
    }
}
