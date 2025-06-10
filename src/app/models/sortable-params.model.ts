export interface SortableParams {
  key: SortableParamsValue;
  direction: 'down' | 'up';
}

export type SortableParamsValue = 'address' | 'gateway' | 'interface';
