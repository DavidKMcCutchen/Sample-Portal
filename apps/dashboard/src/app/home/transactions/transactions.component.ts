import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from '@sample/api-interfaces';

@Component({
  selector: 'sample-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  @Input() trans: Transaction[] | null | undefined;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() transactionViewed = new EventEmitter();
}
