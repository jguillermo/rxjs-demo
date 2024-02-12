import {Observable,Observer} from 'rxjs';

const observer: Observer<any>={
    next: value =>console.log('next:', value),
    error: error=> console.log('error:',error),
    complete: ()=> console.log('completado')
}

const intervalo$=new Observable(subs=>{
  console.log('se crea el observable');
  let contador=0;
  const interval=setInterval(()=>{
    subs.next(contador++);
    console.log('observable next',contador);
  },1000);
  
  setTimeout(()=>{
    subs.complete();
  },2500);
  return ()=>{
    clearInterval(interval);
    console.log('intervalo destruido');
  }
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

setTimeout(()=>{
  subs.unsubscribe();
  subs2.unsubscribe();
  console.log('subs unsubscribe');
},3000)
