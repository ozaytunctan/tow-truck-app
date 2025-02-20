import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header";
import {SidebarComponent} from "../sidebar/sidebar";
import {SidebarService} from "../services/sidebar.service";
import {expandSidebar} from "../../animations/animations";

@Component({
  selector: 'modern-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],

  animations: [
    expandSidebar()
  ],
  template: `
    <div class="flex flex-col h-screen">
      <layout-header/>
      <div class="flex flex-1">
        <sidebar [@expandSidebar]="sidebar.collapsed() ? 'opened':'closed'"/>
        <main class="flex-1 p-6 bg-gray-50">
          <router-outlet/>
        </main>
      </div>
    </div>
  `
})
export class ModernLayout {
  sidebar = inject(SidebarService);
}
