import { Observable, Subscriber } from 'rxjs';
import { map, tap } from 'rxjs/operators';

let subscriber_: Subscriber<number>;

const observable$ = new Observable<number>((sub) => {
  subscriber_ = sub;
});

const subscription = observable$
  .pipe(
    map((value) => ({ base: value, square: value * value })),
    tap((value) => console.log(`Square is ${value.square}`))
  )
  .subscribe({
    next(value) {
      console.log(`Got ${value.base} x ${value.base} = ${value.square}`);
      subscription.unsubscribe();
    },
  });

console.log('Start');
setTimeout(() => {
  subscriber_.next(6);
}, 1000);
