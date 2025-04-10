import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, fromEvent, of, Subscription, concatMap, mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent {
  @ViewChild('btn') btn!: ElementRef;

  observer!: Subscription;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    //we are making use of the from event to create the observable stream
    //we are using merge map
    //merge map executes all the calls parallely
    //the result of merge map is passed on tp the subscription that follows

    this.observer = fromEvent(this.btn.nativeElement, 'click')
      .pipe(mergeMap(() => this.fakeHttp()))
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
