import {Component, effect, signal, viewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StatCardComponent} from "./components/stat-card/stat-card.component";
import {StatTableComponent} from "./components/stat-table/stat-table.component";
import {TOP_INCIDENT_CONTRIBUTORS} from "./model/top-incident-contributor";
import {TOP_TRUCK_PERFORMANCE_INDICATORS} from "./model/top-truck-performance-indicator";
import {
  StatWidgetBody,
  StatWidgetComponent,
  StatWidgetFooter,
  StatWidgetTitle
} from "./components/stat-widget/stat-widget.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    StatCardComponent,
    StatTableComponent,
    StatWidgetComponent,
    StatWidgetTitle,
    StatWidgetBody,
    StatWidgetFooter
  ],
  template: `
    <h1>TOW TRUCK MANAGER DASHBOARD 🚚</h1>

    <div class="dashboard-content">

      <section class="stat-row">
        <!--stat rows-->
        <app-stat-card
          title="Average Response"
          content="19 sec."
          footer="Last month 23sec."
        />

        <app-stat-card
          title="Net Promoter"
          content="71"
          footer="Last month 67"
        />

        <app-stat-card
          title="First Dispatch Effieciency"
          content="87%"
          footer="Last month 76%"
        />

        <app-stat-card
          title="Unresolved Incidents"
          content="472"
          footer="Last month 360"
        />
      </section>

      <!--    -->
      <section class="stat-row">
        <app-stat-table
          title="Top Incident Contributors"
          [data]="incidentContributors()"/>

        <app-stat-card
          title="Live Chat Statisfaction"
          content="41🔺"
          footer="Last month 65"
        />

        <app-stat-card
          title="Calls Statisfaction"
          content="81🔺"
          footer="Last month 78"
        />

      </section>


      <!--    -->
      <section class="stat-row">
        <app-stat-table
          title="Top Truck Performance Indicators"
          [data]="topTruckPerformanceIndicators()"/>

        <div stat-widget>
          <h2 stat-widget-title #widgetTitle="statWidgetTitle">Widget Title</h2>
          <div stat-widget-body>Widget</div>
          <footer stat-widget-footer>Widget Footer</footer>
        </div>


        <stat-widget>
          <stat-widget-title><h2>Widget Title</h2></stat-widget-title>
          <stat-widget-body>Widget Body</stat-widget-body>
          <stat-widget-footer>Widget Footer</stat-widget-footer>
        </stat-widget>


      </section>


    </div>


    <router-outlet/>
  `,
  styles: `

    .dashboard-content {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    .stat-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-auto-rows: auto;
      grid-gap: 1rem;
    }


  `
})
export class AppComponent {
  title = 'tow-track-app';
  incidentContributors = signal(TOP_INCIDENT_CONTRIBUTORS);
  topTruckPerformanceIndicators = signal(TOP_TRUCK_PERFORMANCE_INDICATORS);
  titleWidgetRef = viewChild<StatWidgetTitle>('widgetTitle');

  widgetTitleLogs = effect(() => {
      console.log(this.titleWidgetRef());
    }
  )
}
