import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'empty-layout',
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="flex flex-col h-screen items-center justify-center bg-gray-100 ">
      <router-outlet/>
    </div>
  `
})
export class EmptyLayout {

}
