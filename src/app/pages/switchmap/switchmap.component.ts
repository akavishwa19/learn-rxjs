import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, of, Subscription, concatMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrl: './switchmap.component.scss'
})
export class SwitchmapComponent {
  @ViewChild('btn') btn!: ElementRef;

  observer!: Subscription;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    //we are making use of the from event to create the observable stream
    //we are using switch map
    //switch map cancels the previous request and runs the new one
    //the result of switch map is passed on tp the subscription that follows

    this.observer = fromEvent(this.btn.nativeElement, 'click')
      .pipe(switchMap(() => this.fakeHttp()))
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
