import { Injectable } from '@angular/core';
import { ISales } from '../Interface/isales';
import { HttpClient } from '@angular/common/http';
import { SharedURLService } from './shared-url.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient, private GlobalAPI: SharedURLService) { }

  ISales!: ISales;
  localUrl = this.GlobalAPI.URLAPI + "Sales/";
  Get() {
    return this.http.get<ISales[]>(this.localUrl + 'Get');
  }
}
