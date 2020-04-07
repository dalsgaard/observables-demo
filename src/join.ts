import { merge, combineLatest, interval, timer } from 'rxjs';
import { map, mapTo, take } from 'rxjs/operators';

merge(
  interval(50).pipe(mapTo('a'), take(4)),
  interval(75).pipe(mapTo('b'), take(4))
).subscribe(console.log);

combineLatest(
  timer(500, 150).pipe(
    map((x) => `a${x}`),
    take(3)
  ),
  timer(1000, 250).pipe(
    map((x) => `b${x}`),
    take(3)
  )
).subscribe(console.log);
