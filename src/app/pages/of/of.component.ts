import { Component, ElementRef, ViewChild } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss',
})
export class OfComponent {
  //get the required elements from the dom via viewchild
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;

  //a counter and an observer in order to track the subscription
  counter: number = 1;
  observer!: any;

  constructor() {}

  ngAfterViewInit() {
    this.consumeObservable();
  }

  //emits a sequence of elements that are passed as arguments to the of operator
  obs = of(1000, 200, 3, 4, 5);

  //suibscribe to the observable
  //returns stream of integer values
  consumeObservable() {
    this.observer = this.obs.subscribe(
      (res: number) => {
        console.log(res);
        this.printOnScreen(res);
      },
      (err) => {},
      () => {
        console.log('emission complete');

        //no need to unsubscribe as the unsubscription automatically happens when the complete callback is executed
        // this.observer.unsubscribe()
      }
    );
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
