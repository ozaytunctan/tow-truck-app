import {computed, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // menuItems = signal<MenuItem[]>(MENU_ITEMS);
  collapsed = signal(false);
  sidenavWidthClasses = computed<string>(() => this.collapsed() ? 'w-16' : 'w-64');

  onToggleSidenav() {
    this.collapsed.set(!this.collapsed());
  }



}
