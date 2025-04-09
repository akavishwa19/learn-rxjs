import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, map, pipe, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.scss',
})
export class PluckComponent {
  //get the required elements from the dom via viewchild
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;

  //a counter and an observer in order to track the subscription
  counter: number = 1;
  observer!: any;

  constructor() {}

  ngOnInit() {
    this.consumeObservable();
  }

  //the observable made using the interval operator in rxjs , it will return an observable stream after every interval that is provided , in this case its 1000ms
  //we pipe the values that return an object with 2 keys name and value , we will be plucking the name part in the observer code
  obs = interval(1000).pipe(map((x) => {
    return {name:'something:'+Date.now() , value:x*20}
  }   
));

  //suibscribe to the observable
  //returns stream of integer values
  //the pipe operator transforms each value emitted by the onservable
  //pluck the name property from the emitted value that is an object
  consumeObservable() {
    this.observer = this.obs
      .pipe(pluck('name'))
      .subscribe((res: any) => {
        console.log(res);
        this.printOnScreen(res);
      });
  }

  //function to display the subscription output
  printOnScreen(interval: number) {
    if (this.counter == 5) {
      this.observer.unsubscribe();
    }

    const parent = this.parentEl.nativeElement;
    const liElement = document.createElement('li');
    liElement.innerText = `Value ${this.counter} at ${interval}`;
    parent?.appendChild(liElement);
    this.counter++;
  }
}
