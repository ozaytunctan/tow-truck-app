import {Component, computed, HostBinding, inject, signal} from '@angular/core';
import {SidebarService} from "../services/sidebar.service";

@Component({
  selector: 'sidebar',
  template: `
    <nav>
      <a>
        <li class="no-underline list-none">🚚</li>
      </a>
    </nav>
  `,
})
export class SidebarComponent {

  sidebar = inject(SidebarService);
  sidenavWidthClasses = computed(() =>//
    `${this.sidebar.sidenavWidthClasses()} bg-gray-200 p-4 border-r-8 rounded-r-sm`);

  @HostBinding('class') get hostClasses() {
    return this.sidenavWidthClasses();
  }

}
