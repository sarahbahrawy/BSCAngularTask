import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from '../Interface/icustomer';
import { SharedURLService } from './shared-url.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private GlobalAPI: SharedURLService) { }
  ICustomer!: ICustomer;
  localUrl = this.GlobalAPI.URLAPI + "Customer/";
  Get() {
    return this.http.get<ICustomer[]>(this.localUrl + 'Get');
  }
}
