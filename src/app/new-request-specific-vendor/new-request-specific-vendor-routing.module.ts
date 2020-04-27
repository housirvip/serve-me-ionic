import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewRequestSpecificVendorPage} from './new-request-specific-vendor.page';

const routes: Routes = [
  {
    path: 'new-request-specific-vendor',
    component: NewRequestSpecificVendorPage
  },
  {
    path: 'show-address',
    loadChildren: () => import('../new-request/show-address/show-address.module').then( m => m.ShowAddressPageModule)
  },
  // TODO DO NOT LOAD CYCLE, stack max call exception
  // {
  //   path: 'new-request-specific-vendor',
  //   loadChildren: () => import('./new-request-specific-vendor.module').then(m => m.NewRequestSpecificVendorPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestSpecificVendorPageRoutingModule {}
