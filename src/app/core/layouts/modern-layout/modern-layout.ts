import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'modern-layout',
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="flex flex-col h-screen">
      <header class="bg-red-600 text-white p-4">
        <h1>TOW TRUCK MANAGER DASHBOARD 🚚</h1>
      </header>
      <div class="flex flex-1">
        <aside class="w-64 bg-gray-100 p-4">Sidebar</aside>
        <main class="flex-1 p-6 bg-gray-50">
          <router-outlet/>
        </main>
      </div>
    </div>
  `
})
export class ModernLayout {

}
