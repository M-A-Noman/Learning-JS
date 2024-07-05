import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../posts/post.model';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore: AngularFirestore) { }
  getAllPosts() {
    return this.fireStore
      .collection('posts')
      .snapshotChanges()
      .pipe(
        map(actions => actions
          .map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
  createPosts(post: Post) {
    return new Promise<any>((resolve, reject) => {
      this.fireStore
        .collection('posts')
        .add(post)
        .then(response => { console.log(response) }, error => reject(error));
    })
  }
}
