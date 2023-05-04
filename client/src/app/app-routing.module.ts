import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './_pages/index/index.component';
import { KontaktComponent } from './_pages/kontakt/kontakt.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
