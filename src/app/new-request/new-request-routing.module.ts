import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRequestPage } from './new-request.page';

const routes: Routes = [
  {
    path: '',
    component: NewRequestPage
  },
  {
    path: 'show-address',
    loadChildren: () => import('./show-address/show-address.module').then( m => m.ShowAddressPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestPageRoutingModule {}
