import {Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {Type} from "@angular/core";
import {ModernLayout} from "./core/layouts/modern-layout/modern-layout";
import {EmptyLayout} from "./core/layouts/empty-layout/empty-layout";

export function layoutFactory(): Type<any> {
  debugger;
  // let injector = AppComponent.injector;
  // let layoutManager = injector.get(LayoutManager);
  // debugger;
  // return layoutManager.getLayout();

  return ModernLayout;
}


export const routes: Routes = [
  {
    path: '',
    // loadComponent:layoutFactory,
    component: ModernLayout,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  }
];
