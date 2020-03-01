import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateaddressPage } from './updateaddress.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateaddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateaddressPageRoutingModule {}
