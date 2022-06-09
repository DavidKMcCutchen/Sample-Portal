import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emptyTrans, Transaction } from '@sample/api-interfaces';
import { TransactionFacade } from '@sample/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allTransactions$: Observable<Transaction[]> = this.transFacade.allTransactions$;
  selectedTransactions$: Observable<Transaction> = this.transFacade.selectedTransactions$;

  form: FormGroup;

  constructor(
    private transFacade: TransactionFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.transFacade.mutations$.subscribe((_) => this.resetTransaction());
  }

  ngOnInit() {
    this.initForm();
    this.transFacade.loadTransactions();
    this.resetTransaction()

    const transRouteId = this.route.snapshot.params['transaction'];

    if (transRouteId) {
      this.loadTransaction((transRouteId))
    }
  }

  viewTransaction(transId: string) {
    this.router.navigate(["home", transId])
  }

  loadTransaction(transId: string) {
    this.transFacade.selectTransaction(transId);
    this.transFacade.loadTransaction(transId);
  }

  selectTransaction(trans: Transaction) {
    this.transFacade.selectTransaction(trans.id)
    this.form.patchValue(trans);
  }

  saveTransaction(trans: Transaction) {
    this.transFacade.saveTransaction(trans);
  }

  deleteTransaction(trans: Transaction) {
    this.transFacade.deleteTransaction(trans);
  }

  resetTransaction() {
    this.form.reset();
    this.selectTransaction(emptyTrans)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      value: ['', Validators.required],
    })
  }};

  export function forbiddenItemsValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenItem: { value: control.value } } : null;
    };
  }
