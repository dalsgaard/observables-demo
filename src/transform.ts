import { of } from 'rxjs';
import { map, mapTo, pairwise } from 'rxjs/operators';

console.log('\nmap');
of(1, 2, 3, 4)
  .pipe(map((i) => i * i))
  .subscribe(console.log);

console.log('\nmapTo');
of(1, 2, 3, 4).pipe(mapTo('Hi!')).subscribe(console.log);

console.log('\npairwise');
of(1, 2, 3, 4).pipe(pairwise()).subscribe(console.log);
