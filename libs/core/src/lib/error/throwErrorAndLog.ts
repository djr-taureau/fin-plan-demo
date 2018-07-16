import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

//todo: Convert to RXJS Operator

export const throwErrorAndLog = name => tr => err => {
  console.error(name, err);
  return throwError(tr(err));
};

// export const throwErrorAndLogOperator = () => (source: Observable<any>) => {
//   return new Observable(observer => {
//     return source.pipe(

//     ).subscribe({
//       next(change: any) {
//         observer.next(change);
//       },
//       error(err: any) {
//         observer.error(err);
//       },
//       complete() {
//         observer.complete();
//       }
//     });
//   });
// };

// export const throwErrorAndLog = name => tr => err => {
//   console.error(name, err);
//   // const error = throwError(tr(err));

//   return () => (source: Observable<any>) => {
//     return new Observable(observer => {
//       return source.pipe(
//         catchError(throwError(tr(err)))

//       ).subscribe({
//         next(change: any) {
//           observer.next(change);
//         },
//         error(err: any) {
//           observer.error(err);
//         },
//         complete() {
//           observer.complete();
//         }
//       });
//     });
//   };

//   // return error;
// };

// export const throwErrorAndLogOperator = () => (source: Observable<any>) => {
//   return new Observable(observer => {
//     return source.pipe(

//     ).subscribe({
//       next(change: any) {
//         observer.next(change);
//       },
//       error(err: any) {
//         observer.error(err);
//       },
//       complete() {
//         observer.complete();
//       }
//     });
//   });
// };
