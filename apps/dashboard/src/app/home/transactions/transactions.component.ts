import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { Transaction } from '@sample/api-interfaces';
import { TransactionFacade } from '@sample/core-state';

@Component({
  selector: 'sample-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  @Input() trans: Transaction[] | null | undefined;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() transactionViewed = new EventEmitter();
  length: number;
  pageSize: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  pageIndex: number;

  constructor(
    private transFacade: TransactionFacade
  ) {

  }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      return console.log(this.length)
    }
  }

  ngOnInit() {
    this.paginator();
  }

  public paginator() {
    this.transFacade.allTransactions$.subscribe(
      response =>{
        {
          this.length = response.length;
        }
      }
    );
    return event;
  }
}
