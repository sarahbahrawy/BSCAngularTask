import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedURLService {
  public URLAPI:string="https://localhost:44389/api/";
  constructor() { }
}
