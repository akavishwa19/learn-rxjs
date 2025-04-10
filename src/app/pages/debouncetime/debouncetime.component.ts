import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, debounceTime, Observable, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrl: './debouncetime.component.scss',
})
export class DebouncetimeComponent {
  @ViewChild('inputField') inputEl!: ElementRef;

  typingObservable!: Observable<string>;
  inputValue!: string;

  constructor() {}

  ngAfterViewInit() {
    this.debounceFunction();
  }

  //create an observable stream out of an input event
  //map to transform the data such that instead of the event , we are getting the value from the target
  //add debpuncetime to it with argument as the delay

  debounceFunction() {
    this.typingObservable = fromEvent(this.inputEl.nativeElement, 'input').pipe(
      map((event: any) => (event.target as HTMLInputElement).value),
      debounceTime(1000),

      //distinct until change means it wont hidner if the new emitted value is same as that of the previous value
      distinctUntilChanged()
    );

    //while we subscribe , we will only get the devounced stream rather than the raw stream
    this.typingObservable.subscribe((res: any) => {
      this.inputValue = res;
    });
  }
}
