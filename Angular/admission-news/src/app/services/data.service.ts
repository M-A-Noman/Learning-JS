import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../posts/post.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore: AngularFirestore) { }
  getAllPosts() {
    return this.fireStore
      .collection('posts')
      .snapshotChanges();
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
