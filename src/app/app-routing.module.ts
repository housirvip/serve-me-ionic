import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile-page.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'vendor-registration',
    loadChildren: () =>
        import('./vendor-registration/vendor-registration.module').then(m => m.VendorRegistrationModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'update-name',
    loadChildren: () => import('./profile/update-name/update-name.module').then( m => m.UpdateNamePageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'new-request',
    loadChildren: () => import('./new-request/new-request.module').then( m => m.NewRequestPageModule)
  },
  {
    path: 'vendor-page',
    loadChildren: () => import('./vendor-page/vendor-page.module').then( m => m.VendorPagePageModule)
  },
  {
    path: 'vendor-order',
    loadChildren: () => import('./vendor-order/vendor-order.module').then( m => m.VendorOrderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
