import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header";
import {SidebarComponent} from "../sidebar/sidebar";

@Component({
  selector: 'modern-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent
  ],
  template: `
    <div class="flex flex-col h-screen">
      <layout-header/>
      <div class="flex flex-1">
        <sidebar/>
        <main class="flex-1 p-6 bg-gray-50">
          <router-outlet/>
        </main>
      </div>
    </div>
  `
})
export class ModernLayout {

}
