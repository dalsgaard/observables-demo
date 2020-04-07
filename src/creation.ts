import { from, of, generate, interval, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { promisify } from 'util';
import { log } from './utils';

const timeout = promisify(setTimeout);

console.log('\nStart `of`');
of(1, 3, 6).subscribe(console.log);

console.log('\nStart `generate`');
generate(
  5,
  (x) => x < 1000,
  (x) => x * x
).subscribe(console.log);

console.log('\nStart `from`');
from(timeout(500, 5)).subscribe(log('from'));

console.log('\nStart `interval`');
interval(200).pipe(take(5)).subscribe(log('interval'));

console.log('\nStart `timer`');
timer(300, 250).pipe(take(5)).subscribe(log('timer'));
