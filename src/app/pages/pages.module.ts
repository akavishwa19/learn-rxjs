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


@NgModule({
  declarations: [
    PagesComponent,
    PromisesComponent,
    FromEventComponent,
    IntervalComponent,
    TimerComponent,
    OfComponent,
    FromComponent,
    ToArrayComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
