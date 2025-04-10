import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map , debounceTime, Observable } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrl: './debouncetime.component.scss',
})
export class DebouncetimeComponent {
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
      debounceTime(1000)
    );

    this.typingObservable.subscribe((res: any) => {
      this.inputValue=res;
    });
  }
}
