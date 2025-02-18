import {Routes} from '@angular/router';
import {ModernLayout} from "./core/layouts/modern-layout";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '',
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
