import { of } from 'rxjs';
import {} from 'rxjs/operators';

console.log('Start');
of(1, 3, 6).subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('Done');
  },
});
