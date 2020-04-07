import { merge, combineLatest, interval, timer, of } from 'rxjs';
import { map, mapTo, take, tap, share } from 'rxjs/operators';

const source$ = interval(200).pipe(take(5), tap(console.log));
const shared$ = source$.pipe(share());
shared$.pipe(mapTo('@')).subscribe(console.log);
shared$.pipe(mapTo('#')).subscribe(console.log);
