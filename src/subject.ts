import { Subject, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const subject$ = new Subject<number>();

subject$.pipe(map((x) => x * x)).subscribe(console.log);
subject$.pipe(map((x) => x + x)).subscribe(console.log);

interval(100).pipe(take(5)).subscribe(subject$);
