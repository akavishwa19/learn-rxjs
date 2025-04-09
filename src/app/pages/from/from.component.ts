import { Component, ElementRef, ViewChild } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss',
})
export class FromComponent {
  //get the required elements from the dom via viewchild
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;

  //a counter and an observer in order to track the subscription
  counter: number = 1;
  observer!: any;

  constructor() {}

  ngAfterViewInit() {
    this.consumeObservable();
  }

  //emits a sequence of elements that are passed as arguments to the from operator , the passed argument should be an array
  //each index value is a single emission
  obs = from([1000, 200, 3, 4, 5]);

  //suibscribe to the observable
  //returns stream of integer values
  consumeObservable() {
    this.observer = this.obs.subscribe({
      next: (res: any) => {
        console.log(res);
        this.printOnScreen(res);
      },
      error: (err) => {},
      complete: () => {
        console.log('emission complete');
      },
    });
  }

  //function to display the subscription output
  printOnScreen(interval: number) {
    // if (this.counter == 5) {
    //   this.observer.unsubscribe();
    // }

    const parent = this.parentEl.nativeElement;
    const liElement = document.createElement('li');
    liElement.innerText = `Value ${this.counter} at ${interval}`;
    parent?.appendChild(liElement);
    this.counter++;
  }
}
