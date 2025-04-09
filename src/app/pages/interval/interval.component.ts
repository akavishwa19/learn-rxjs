import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss',
})
export class IntervalComponent {
  
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;

  counter: number = 1;
  observer!: any;

  constructor() {}

  ngOnInit() {}

  obs = interval(1500);

  printOnScreen(btnValue: string) {
    console.log(this.counter);

    if (this.counter == 5) {
      this.observer.unsubscribe();
    }

    const parent = this.parentEl.nativeElement;
    const liElement = document.createElement('li');
    liElement.innerText = `Value ${this.counter} from ${btnValue}`;
    parent?.appendChild(liElement);
    this.counter++;
  }
}
