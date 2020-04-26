import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewRequestSpecificVendorPage} from './new-request-specific-vendor.page';

const routes: Routes = [
  {
    path: '',
    component: NewRequestSpecificVendorPage
  },
  {
    path: 'show-address',
    loadChildren: () => import('../new-request/show-address/show-address.module').then( m => m.ShowAddressPageModule)
  },
  {
    path: 'new-request-specific-vendor',
    loadChildren: () => import('./new-request-specific-vendor.module').then(m => m.NewRequestSpecificVendorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestSpecificVendorPageRoutingModule {}
