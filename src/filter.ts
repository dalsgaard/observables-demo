import { range, of, interval, merge } from 'rxjs';
import {
  filter,
  first,
  last,
  take,
  takeWhile,
  distinct,
  distinctUntilChanged,
  debounceTime,
  mapTo,
  map,
} from 'rxjs/operators';

console.log('\nStart `filter`');
range(1, 10)
  .pipe(filter((x) => x % 2 === 0))
  .subscribe(console.log);

console.log('\nStart `first`');
range(1, 10).pipe(first()).subscribe(console.log);

console.log('\nStart `last`');
range(1, 10).pipe(last()).subscribe(console.log);

console.log('\nStart `take`');
range(1, 10).pipe(take(3)).subscribe(console.log);

console.log('\nStart `takeWhile`');
range(1, 10)
  .pipe(takeWhile((x) => x < 4))
  .subscribe(console.log);

console.log('\nStart `distinct`');
of(1, 2, 3, 3, 5, 3).pipe(distinct()).subscribe(console.log);

console.log('\nStart `distinctUntilChanged`');
of(1, 2, 3, 3, 5, 3).pipe(distinctUntilChanged()).subscribe(console.log);

console.log('\nStart `debounceTime`');
merge(
  interval(100).pipe(
    map((x) => `a${x}`),
    take(4)
  ),
  interval(110).pipe(
    map((x) => `b${x}`),
    take(4)
  ),
  interval(120).pipe(
    map((x) => `c${x}`),
    take(4)
  )
)
  .pipe(debounceTime(25))
  .subscribe(console.log);
