import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, of, Subscription, concatMap, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrl: './exhaustmap.component.scss'
})
export class ExhaustmapComponent {
  @ViewChild('btn') btn!: ElementRef;

  observer!: Subscription;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    //we are making use of the from event to create the observable stream
    //we are using exhaust map
    //exhaust map ignores the new emissions if the previous one is still running
    //the result of exhaust map is passed on tp the subscription that follows

    this.observer = fromEvent(this.btn.nativeElement, 'click')
      .pipe(exhaustMap(() => this.fakeHttp()))
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
