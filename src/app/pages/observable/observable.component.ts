import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent {
  //get the required elements from the dom via viewchild
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;

  myObservable!: any;

  //a counter and an observer in order to track the subscription
  counter: number = 1;
  observer!: any;

  constructor() {}

  ngOnInit() {
    this.createObservable();
  }

  ngAfterViewInit() {
    this.consumeObservable();
  }

  //suibscribe to the observable
  //habdle the emission  , errors as well as the completion here itself
  consumeObservable() {
    this.observer = this.myObservable.subscribe(
      (res: number) => {
        console.log(res);
        this.printOnScreen(res);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('emission completed');
      }
    );
  }

  //function to display the subscription output
  printOnScreen(interval: number) {
    const parent = this.parentEl.nativeElement;
    const liElement = document.createElement('li');
    liElement.innerText = `Value ${this.counter} at ${interval}`;
    parent?.appendChild(liElement);
    this.counter++;
  }

  //our custom observable is created using the new keyword
  //we can emit values using the next method
  //we can throw errors using the error method
  //the arguments under the next and error mathods are returned while subscribtion happens
  //we can send the complete method as well to stop the stream]
  //here we have sued set timeout because we ant to emit values after some gap
  createObservable() {
    this.myObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('custom observable 1');
      }, 1000);
      setTimeout(() => {
        observer.next('custom observable 2');
      }, 2000);
      setTimeout(() => {
        observer.next('custom observable 3');
      }, 3000);
      setTimeout(() => {
        observer.next('custom observable 4');
      }, 4000);
      setTimeout(() => {
        observer.next('custom observable 5');
      }, 5000);
      setTimeout(() => {
        observer.error('some error pccured');
      }, 6000);
      setTimeout(() => {
        observer.complete();
      }, 7000);
    });
  }
}
