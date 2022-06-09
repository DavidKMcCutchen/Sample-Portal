import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Transaction } from '@sample/api-interfaces';
import { SampleEnvironment, SAMPLE_ENVIRONMENT } from '@sample/environment';

const BASE_URL = 'https://api-30x30.herokuapp.com/';
const model = 'transactions'


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
    private http: HttpClient,
    @Inject(SAMPLE_ENVIRONMENT) private environment: SampleEnvironment
  ) {}

  getAll() {
    return this.http.get<Transaction[]>(this.getUrl())
  };

  find(id: string) {
    return this.http.get<Transaction>(this.getUrlById(id))
  };

  create(trans: Transaction) {
    return this.http.post<Transaction>(this.getUrl(), trans)
  };

  update(trans: Transaction) {
    return this.http.patch<Transaction>(this.getUrlById(trans.id), trans)
  };

  delete({id}: Transaction) {
    return this.http.delete<Transaction>(this.getUrlById(id))
  }

  getUrl() {
    return `${BASE_URL}${model}`
  };

  getUrlById(id: any) {
    return `${this.getUrl()}/${id}`
  };
  
}
