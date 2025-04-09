import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  first,
  fromEvent,
  last,
  of,
  take,
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss',
})
export class TakeComponent {
  //get the required elements from the dom via viewchild
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;
  @ViewChild('btn') btnEl!: ElementRef<HTMLElement>;

  //a counter and an observer in order to track the subscription
  counter: number = 1;
  observer!: any;

  constructor() {}

  ngAfterViewInit() {
    this.consumeObservable();
  }

  //emits a sequence of elements that are passed as arguments to the of operator
  obs = of(5, 200, 3, 4, 5);

  //suibscribe to the observable
  //returns stream of integer values
  //the take operator will take a number as argument and it will emit only those number of arguments
  consumeObservable() {
    //simple take
    this.observer = this.obs.pipe(take(3)).subscribe((res: number) => {
      console.log(res);
      this.printOnScreen(res);
    });

    //take until
    //this is a special type where it accepst an observable as an argument and the emission continues until the stream is hindered by the passed observable

    const btnClickObservable$ = fromEvent(this.btnEl.nativeElement, 'click');

    this.observer = this.obs
      .pipe(takeUntil(btnClickObservable$))
      .subscribe((res: number) => {
        console.log(res);
        this.printOnScreen(res);
      });

    //take last
    //the emission is done for the last values in order that are passed in as argument

    this.observer = this.obs.pipe(takeLast(3)).subscribe((res: number) => {
      console.log(res);
      this.printOnScreen(res);
    });

    //first
    //the emission is done for the first value  and then it stops

    this.observer = this.obs.pipe(first()).subscribe((res: number) => {
      console.log(res);
      this.printOnScreen(res);
    });

    //last
    //the emission is done for the last value  and then it stops

    this.observer = this.obs.pipe(last()).subscribe((res: number) => {
      console.log(res);
      this.printOnScreen(res);
    });

    //take while
    //the emission is continued until and unless the condition is true for the particular emission

    this.observer = this.obs
      .pipe(takeWhile((x) => x > 50))
      .subscribe((res: number) => {
        console.log(res);
        this.printOnScreen(res);
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
