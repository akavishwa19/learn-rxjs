import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss',
})
export class FromEventComponent {
  @ViewChild('btn') myBtn!: ElementRef<HTMLElement>;
  @ViewChild('parentEl') parentEl!: ElementRef<HTMLElement>;

  counter: number = 1;
  observer!: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.observableFromEvent();
  }

  observableFromEvent() {
    this.observer = fromEvent<MouseEvent>(
      this.myBtn.nativeElement,
      'click'
    ).subscribe((res: MouseEvent) => {
      // console.log(res.target.type , typeof res.target);
      const target = res.target as HTMLButtonElement;
      this.printOnScreen(target.type);
    });
  }

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
