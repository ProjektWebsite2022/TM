import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './_pages/events/events.component';
import { IndexComponent } from './_pages/index/index.component';
import { KontaktComponent } from './_pages/kontakt/kontakt.component';
import { SingleEventComponent } from './_pages/single-event/single-event.component';
import { UeberUnsComponent } from './_pages/ueber-uns/ueber-uns.component';
import { WarenkorbComponent } from './_pages/warenkorb/warenkorb.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'kontakt',
    pathMatch: 'full',
    component: KontaktComponent
  },
  {
    path: 'ueber-uns',
    pathMatch: 'full',
    component: UeberUnsComponent
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent
  },
  {
    path: 'events/:eventId',
    pathMatch: 'full',
    component: SingleEventComponent
  },
  {
    path: 'warenkorb',
    pathMatch: 'full',
    component: WarenkorbComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
