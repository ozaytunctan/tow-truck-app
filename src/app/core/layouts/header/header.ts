import {Component, inject} from '@angular/core';
import {SidebarService} from "../services/sidebar.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'layout-header',
  imports: [
    MatIcon
  ],
  template: `
    <header class="bg-gray-400 text-white p-4">
      <a class="flex flex-row items-end gap-1">
        TOW TRUCK MANAGER DASHBOARD 🚚
        <mat-icon
          (click)="sidebar.onToggleSidenav()"
          class="material-symbols-outlined cursor-pointer">
          menu
        </mat-icon>
      </a>
    </header>
  `
})
export class HeaderComponent {

  readonly sidebar=inject(SidebarService);

}
