import {Component, computed, input, signal} from '@angular/core';
import {TitleCasePipe} from "@angular/common";

@Component({
  template: `
    <section class="stat-table-container">
      <h2>{{ title() }}</h2>
      <table>
        <thead>
        <tr>
          @for (col of columns(); track col) {
            <th>{{ col|titlecase }}</th>
          }
        </tr>
        </thead>

        <tbody>
          @for (dataRow of data(); track dataRow) {
            <tr>
              @for (col of columns(); track col) {
                <td>{{ dataRow[col] }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </section>
  `,
  selector: 'app-stat-table',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  styles: `
    $primary-color:red;
    $border-color: #ddd;
    $table-header-color: red;
    $table-cell-padding: 10px 15px; // Hücre dolgusu

    .stat-table-container {
      background-color: $primary-color;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      color: #fff;
      table {
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;

        thead {
          tr {
            th {
              background-color: $table-header-color;
              text-align: left;
              padding: $table-cell-padding;
              border-bottom: 1px solid $border-color;
              font-weight: 600; // Kalın yazı tipi
            }
          }
        }

        tbody {
          tr {
            /*&:nth-child(even) {
              background-color: #f9f9f9; // Çift satırlar için daha açık gri
            }*/

            td {
              padding: $table-cell-padding;
              text-align: left;
              //border-bottom: 1px solid $border-color;
            }
          }
        }
      }
    }  `
})
export class StatTableComponent {

  title = input.required<string>();
  data = input<any[]>([]);

  columns = computed(() => {
      const tableData = this.data();
      if (tableData.length > 0) {
        return Object.keys(tableData[0]);
      }
      return [];
    }
  );


}
