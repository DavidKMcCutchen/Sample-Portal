export interface Message {
  message: string;
}

export interface BaseEntity {
  id: string;
};

export interface Transaction extends BaseEntity {
  name: string;
  value: string;
};

export const emptyTrans: Transaction = {
  id: '1',
  name: 'Test',
  value: '1.50'
};