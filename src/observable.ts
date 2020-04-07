import { Observable, Subscriber } from 'rxjs';

let subscriber_: Subscriber<number>;

const observable$ = new Observable<number>((sub) => {
  subscriber_ = sub;
});

const subscription = observable$.subscribe({
  next(value) {
    console.log(`Got ${value}`);
    subscription.unsubscribe();
  },
});

console.log('Start');
setTimeout(() => {
  subscriber_.next(6);
}, 1000);
