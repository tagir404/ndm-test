import { Component, signal } from '@angular/core';
import { DataTable } from '../../components/data-table.component';
import { Route } from '../../models/route.model';
import type { WritableSignal } from '@angular/core';

@Component({
  selector: 'home-page',
  imports: [DataTable],
  template: `
    <p class="table-title">Действующие маршруты IPv4</p>
    <data-table [routesList]="routesList()" />
  `,
  styles: `
    .table-title {
      font-size: 24px;
      font-weight: bold;
    }
  `,
})
export class HomePage {
  routesList: WritableSignal<Route[]> = signal([
    {
      uuid: '1',
      address: '0.0.0.0/0',
      mask: '0.0.0.0',
      gateway: '193.0.174.1',
      interface: 'Подключение Ethernet',
    },
    {
      uuid: '2',
      address: '10.1.30.0/24',
      mask: '255.255.255.0',
      gateway: '10.1.30.1',
      interface: 'Гостевая сеть',
    },
    {
      uuid: '3',
      address: '192.168.1.0/24',
      mask: '255.255.255.0',
      gateway: '192.168.1.1',
      interface: 'Домашняя сеть',
    },
    {
      uuid: '4',
      address: '172.16.0.0/16',
      mask: '255.255.0.0',
      gateway: '172.16.0.1',
      interface: 'Локальная сеть',
    },
    {
      uuid: '5',
      address: '192.168.100.0/24',
      mask: '255.255.255.0',
      gateway: '192.168.100.1',
      interface: 'Wi-Fi Гостевая',
    },
    {
      uuid: '6',
      address: '10.10.10.0/24',
      mask: '255.255.255.0',
      gateway: '10.10.10.1',
      interface: 'VPN-сеть',
    },
    {
      uuid: '7',
      address: '192.168.200.0',
      mask: '255.255.255.240.0',
      gateway: '192.168.200.254.0',
      interface: 'Ethernet2',
    },
    {
      uuid: '8',
      address: '172.20.50.0',
      mask: '255.255.255.128.0',
      gateway: '172.20.50.129',
      interface: 'WLAN',
    },
    {
      uuid: '9',
      address: '10.50.25.0',
      mask: '255.255.252.0',
      gateway: '10.50.25.254',
      interface: 'Ethernet3',
    },
    {
      uuid: '10',
      address: '192.168.150.0',
      mask: '255.255.128.0',
      gateway: '192.168.150.129',
      interface: 'WLAN2',
    },
  ]);
}
