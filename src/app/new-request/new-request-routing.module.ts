import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRequestPage } from './new-request.page';

const routes: Routes = [
  {
    path: 'new-request',
    component: NewRequestPage
  },
  {
    path: 'show-address',
    loadChildren: () => import('./show-address/show-address.module').then( m => m.ShowAddressPageModule)
  },
  // TODO DO NOT LOAD CYCLE, stack max call exception
  // {
  //   path: 'new-request',
  //   loadChildren: () => import('./new-request.module').then(m => m.NewRequestPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestPageRoutingModule {}
