import { Subject, BehaviorSubject, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

const subject$ = new Subject<number>();

subject$.pipe(map((x) => `a:${x}`)).subscribe(console.log);

setTimeout(() => {
  subject$.pipe(map((x) => `b:${x}`)).subscribe(console.log);
}, 50);

timer(0, 100).pipe(take(3)).subscribe(subject$);
