import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorOrderPage } from './vendor-order.page';

const routes: Routes = [
  {
    path: '',
    component: VendorOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorOrderPageRoutingModule {}
