import {Component, input} from '@angular/core';
import {UpperCasePipe} from "@angular/common";

@Component({
    selector: 'app-stat-card',
    imports: [UpperCasePipe],
    template: `
    <section class="stat-card flex flex-col justify-center w-60 h-40 bg-[#fff] p-5 shadow-sm shadow-gray-200 text-center rounded-lg ">
      <h2 class="title text-base text-gray-[#555] mb-2 ">{{ title()|uppercase }}</h2>
      <p class="value">{{ content() }}</p>
      <div class="comparison text-sm mt-4 text-gray-400">{{ footer() }}</div>
    </section>
  `,
    styles: `


    .stat-card {
      //width: 250px;
      //height: 150px;
      //display: flex;
      //flex-direction: column;
      //justify-content: center;
      //
      //background-color: #fff;
      //border-radius: 10px;
      //padding: 20px;
      //text-align: center;
      //font-family: sans-serif;
      //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .title {
      //font-size: 1em;
      //color: #555;
      //margin-bottom: 10px;
    }

    .value {
      font-size: 2em;
      font-weight: bold;
      color: #333;
      transition: transform 600ms ease,box-shadow 600ms;
    }

    .value:hover, value:focus {
      transform: translateX(20px);
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    }

    .comparison {
      //font-size: 0.8em;
      //color: #888;
      //margin-top: 5px;
    }


  `
})
export class StatCardComponent {

  title = input.required<string>();
  content = input.required<string>();
  footer = input.required<string>();


}
