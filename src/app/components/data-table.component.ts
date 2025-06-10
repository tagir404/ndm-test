import { Component, computed, input, signal } from '@angular/core';
import { DataTableItem } from './data-table-item.component';
import { Route } from '../models/route.model';
import { TableHeader } from '../models/table-header.model';
import type {
  SortableParams,
  SortableParamsValue,
} from '../models/sortable-params.model';

@Component({
  selector: 'data-table',
  imports: [DataTableItem],
  template: `
    <table class="table">
      <thead class="table__head">
        <tr>
          @for (header of headers; track header.key) {
          <td class="table__head-cell" (click)="changeSortParams(header.key)">
            {{ header.label }}
            @if (header.key === curSortParams().key) {
            <svg
              [class]="curSortParams().direction"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#666666"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
            }
          </td>
          }
        </tr>
      </thead>
      <tbody>
        @for (route of sortedRoutes(); track route.uuid) {
        <tr data-table-item [route]="route"></tr>
        }
      </tbody>
    </table>
  `,
  styles: `
    .table {
      font-size: 18px;
      border-collapse: collapse;
      width: 100%;
    }
    .table__head {
      background:rgb(226, 226, 226);
    }
    .table__head-cell {
      padding: 10px;
      cursor: pointer;
      width: calc(100% / 3);
      user-select: none;
      position: relative;
    }
    .table__head-cell svg {
      position: absolute;
      right: 10px;
    }
    .table__head-cell svg.up {
      transform: rotate(180deg);
    }
  `,
})
export class DataTable {
  headers: TableHeader[] = [
    { label: 'Адрес назначения', key: 'address' },
    { label: 'Шлюз', key: 'gateway' },
    { label: 'Интерфейс', key: 'interface' },
  ];

  routesList = input.required<Route[]>();

  sortedRoutes = computed(() => {
    const routesCopy = [...this.routesList()];

    return routesCopy.sort((a, b) => {
      const valA = a[this.curSortParams().key];
      const valB = b[this.curSortParams().key];

      if (this.curSortParams().direction === 'down')
        return valA < valB ? -1 : valA > valB ? 1 : 0;
      else return valA > valB ? -1 : valA < valB ? 1 : 0;
    });
  });

  curSortParams = signal<SortableParams>({
    key: 'address',
    direction: 'down',
  });

  changeSortParams(newValue: SortableParamsValue) {
    if (this.curSortParams().key !== newValue) {
      this.curSortParams.set({ key: newValue, direction: 'down' });
    } else {
      const { key, direction } = this.curSortParams();
      if (direction === 'down')
        this.curSortParams.set({ key, direction: 'up' });
      else this.curSortParams.set({ key, direction: 'down' });
    }
  }
}
