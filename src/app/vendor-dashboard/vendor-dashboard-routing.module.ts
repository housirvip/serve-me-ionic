import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorDashboardPage } from './vendor-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: VendorDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorDashboardPageRoutingModule {}
