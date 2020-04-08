import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidingEditPage } from './biding-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BidingEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidingEditPageRoutingModule {}
