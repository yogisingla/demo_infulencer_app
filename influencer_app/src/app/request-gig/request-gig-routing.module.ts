import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestGigPage } from './request-gig.page';

const routes: Routes = [
  {
    path: '',
    component: RequestGigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestGigPageRoutingModule {}
