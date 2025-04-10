import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, throttleTime, Observable , distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-throttletime',
  templateUrl: './throttletime.component.html',
  styleUrl: './throttletime.component.scss',
})
export class ThrottletimeComponent {
  @ViewChild('inputField') inputEl!: ElementRef;

  typingObservable!: Observable<string>;
  inputValue!: string;

  constructor() {}

  ngAfterViewInit() {
    this.debounceFunction();
  }

  //create an observable stream out of an input event
  //map to transform the data such that instead of the event , we are getting the value from the target
  //add throttle time to it with argument as the delay
  debounceFunction() {
    this.typingObservable = fromEvent(this.inputEl.nativeElement, 'input').pipe(
      map((event: any) => (event.target as HTMLInputElement).value),
      throttleTime(1000),

      //distinct until change means it wont hidner if the new emitted value is same as that of the previous value
      distinctUntilChanged()
    );

    this.typingObservable.subscribe((res: any) => {
      this.inputValue = res;
    });
  }
}
