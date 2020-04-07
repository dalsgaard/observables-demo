import { of } from 'rxjs';
import { map, tap, concatAll } from 'rxjs/operators';

of(1, 2, 3, 4)
  .pipe(
    map((i) => of(i)),
    tap(console.log),
    concatAll()
  )
  .subscribe(console.log);
