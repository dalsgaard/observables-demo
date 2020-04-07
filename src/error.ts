import { from } from 'rxjs';
import {} from 'rxjs/operators';

console.log('Start');
from(Promise.reject('Failed')).subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('Done');
  },
  error(err) {
    console.log('Error', err);
  },
});
