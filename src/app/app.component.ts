import {Component, effect, model, signal} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {useDebounceTime} from "./core/signal/debounce-time";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  template: `
    <!--    <router-outlet/>-->
    <div class="search-container">
      Search:
      <input [(ngModel)]="searchText">
      <div>{{ searchDebounced() }}</div>
    </div>
  `,
  styles: `

    .search-container {
      margin: 15px;
    }

    input {
      border: 1px solid darkgray;
      padding: 4px;
      border-radius: 5px;
      width: 264px;
    }

    input:focus {
      border-color: #007bff;
      outline: none;
    }

  `
})
export class AppComponent {

  public searchText = model<string>('');
  public searchDebounced = useDebounceTime(this.searchText, 1000);


}
