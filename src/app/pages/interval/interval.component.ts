import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss',
})
export class IntervalComponent {
  
    //get the required elements from the dom via viewchild
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;

    //a counter and an observer in order to track the subscription
  counter: number = 1;
  observer!: any;

  constructor() {}

  ngOnInit() {
    this.consumeObservable()
  }

  //the observable made using the interval operator in rxjs , it will return an observable stream after every interval that is provided , in this case its 1000ms  
  obs = interval(1000);

  //suibscribe to the observable
  //returns stream of integer values
  consumeObservable(){
    this.observer = this.obs.subscribe((res:number)=>{
      console.log(res);
      this.printOnScreen(res)
    })
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
