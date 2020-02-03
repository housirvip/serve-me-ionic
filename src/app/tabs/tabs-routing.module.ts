import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'orders',
                loadChildren: () => import('../orders/orders.module').then( m => m.OrdersPageModule)
            },
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../tab2/tab2.module').then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'my',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../my/my.module').then(m => m.MyPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/dashboard',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
