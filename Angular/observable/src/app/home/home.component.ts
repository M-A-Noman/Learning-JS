import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstSubscription=interval(1000).subscribe(
    //   (count) =>{console.log(count)}
    // )
    const CustomIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 3) {
          observer.complete();
        }
        if (count === 4) {
          observer.error(new Error(`An error has been occur at count `+count+`!!`));
        }
        count++;
      },1000)
    })
    this.firstSubscription=CustomIntervalObservable.subscribe(
      (count) => { console.log(count); },
      (error) => {
        alert(error.message)
      }, () => {
        alert('Observer has complete its work');
      }
    );
  }
  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
