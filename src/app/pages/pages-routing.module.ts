import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'address-form',
        loadChildren: () => import('./address-form/address-form.module').then((m) => m.AddressFormModule),
      },
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then((m) => m.TableModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
