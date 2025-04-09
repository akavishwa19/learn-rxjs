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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
