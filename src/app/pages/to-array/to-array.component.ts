import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent {
  
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
  //to add operators on the observable we need to pipe the data
  //the take operator limits the num,ber of values to the provided argument
  //the toarray operator converts the stream of data into an array
  consumeObservable(){
    this.observer = this.obs.pipe(
      take(3),
      toArray()
    ).subscribe((res:any)=>{
      console.log(res);
      this.printOnScreen(res)
    })
  }

    //function to display the subscription output
  printOnScreen(interval: number) {

  
    const parent = this.parentEl.nativeElement;
    const liElement = document.createElement('li');
    liElement.innerText = `Value ${this.counter} at ${interval}`;
    parent?.appendChild(liElement);
    this.counter++;
  }
}
