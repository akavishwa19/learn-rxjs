import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, of, Subscription, concatMap } from 'rxjs';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrl: './concatmap.component.scss',
})
export class ConcatmapComponent {
  @ViewChild('btn') btn!: ElementRef;

  observer!: Subscription;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    //we are making use of the from event to create the observable stream
    //we are using concat map
    //concat map ques the subsequent calls
    //the result of concat map is passed on tp the subscription that follows

    this.observer = fromEvent(this.btn.nativeElement, 'click')
      .pipe(concatMap(() => this.fakeHttp()))
      .subscribe((res: any) => {
        console.log(res);
        console.log('getting  some response yeah');
      });
  }

  //here we are trying to simulate a fake http request , the request results an observable after second
  fakeHttp() {
    return of('value from fake http call').pipe(delay(1000));
  }
}
