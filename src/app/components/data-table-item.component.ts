import { Component, input } from "@angular/core";
import { Route } from "../models/route.model";

@Component({
  selector: '[data-table-item]',
  template: `
    <td class="table-cell">{{ route().address }}</td>
    <td class="table-cell">{{ route().gateway }}</td>
    <td class="table-cell">{{ route().interface }}</td>
  `,
  styles: `
    .table-cell {
      padding: 15px 10px;
      border-bottom: 1px solid rgb(241, 241, 241);
    }
  `
})
export class DataTableItem {
  route = input.required<Route>()
}