import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map , throttleTime, Observable } from 'rxjs';

@Component({
  selector: 'app-throttletime',
  templateUrl: './throttletime.component.html',
  styleUrl: './throttletime.component.scss'
})
export class ThrottletimeComponent {
  @ViewChild('inputField') inputEl!: ElementRef;

  typingObservable!:Observable<string>
  inputValue!:string;

  constructor() {}

  ngAfterViewInit() {
    this.debounceFunction();
  }

  debounceFunction() {
    this.typingObservable = fromEvent(this.inputEl.nativeElement, 'input').pipe(
      map((event:any) => (event.target as HTMLInputElement).value),
      throttleTime(1000)
    );

    this.typingObservable.subscribe((res: any) => {
      this.inputValue=res;
    });
  }
}
