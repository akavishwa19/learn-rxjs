import { Component, ElementRef, ViewChild } from '@angular/core';
import { of, pipe, map, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss',
})
export class TapComponent {
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
  obs = of(10, 20, 3, 4, 5);

  //suibscribe to the observable
  //returns stream of integer values
  //tap is used by the developer to see the state of the emitted values thats it , nothing more or nothing less beyond this
  consumeObservable() {
    this.observer = this.obs
      .pipe(
        tap((x) => console.log( 'before map '+ x)),
        map((x) => x * 10),
        tap((x) => console.log( 'after map '+ x)),
      )
      .subscribe(
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
