import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PromisesComponent } from './promises/promises.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { Observable } from 'rxjs';
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
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ExhaustmapComponent } from './exhaustmap/exhaustmap.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: PromisesComponent,
      },
      {
        path: 'from-event',
        component: FromEventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'timer',
        component: TimerComponent,
      },
      {
        path: 'of',
        component: OfComponent,
      },
      {
        path: 'from',
        component: FromComponent,
      },
      {
        path: 'to-array',
        component: ToArrayComponent,
      },
      {
        path: 'observable',
        component: ObservableComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'pluck',
        component: PluckComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'tap',
        component: TapComponent,
      },
      {
        path: 'take',
        component: TakeComponent,
      },
      {
        path: 'retry',
        component: RetryComponent,
      },
      {
        path: 'debounce-time',
        component: DebouncetimeComponent,
      },
      {
        path: 'throttle-time',
        component: ThrottletimeComponent,
      },
      {
        path: 'concat-map',
        component: ConcatmapComponent,
      },
      {
        path: 'switch-map',
        component: SwitchmapComponent,
      },
      {
        path: 'merge-map',
        component: MergeMapComponent,
      },
      {
        path: 'exhaust-map',
        component: ExhaustmapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
