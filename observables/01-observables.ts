import {Observable,Observer} from 'rxjs';

const observer: Observer<any>={
    next: value =>console.log('siguiente [next]:', value),
    error: error=> console.log('error [obs]',error),
    complete: ()=> console.log('completado [obs]')
}

const obs$ = new Observable(subs=>{
  subs.next('hola');
  subs.next('mundo');
  const a =undefined;
  a.nombre=1;
  subs.complete();
});


/*obs$.subscribe(
  valor=> console.log('next:',valor),
  error => console.warn('error:',error),
  ()=> console.log('Completado')
);*/

obs$.subscribe(observer);