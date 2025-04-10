import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PromisesComponent } from './promises/promises.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { ObservableComponent } from './observable/observable.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebouncetimeComponent } from './debouncetime/debouncetime.component';
import { ThrottletimeComponent } from './throttletime/throttletime.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';


@NgModule({
  declarations: [
    PagesComponent,
    PromisesComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    OfComponent,
    FromComponent,
    ToArrayComponent,
    ObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebouncetimeComponent,
    ThrottletimeComponent,
    ConcatmapComponent,
    MergeMapComponent,
    ExhaustmapComponent,
    SwitchmapComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
