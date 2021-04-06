import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVisitView } from '../Interface/ivisit-view';
import { IVisits } from '../Interface/ivisits';
import { SharedURLService } from './shared-url.service';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient, private GlobalAPI: SharedURLService) { }
  IVisits!: IVisits;
  localUrl = this.GlobalAPI.URLAPI + "Visits/";
  Get() {
    return this.http.get<IVisits[]>(this.localUrl + 'Get');
  }
  SaveVisit() {
    return this.http.post<IVisits>(this.localUrl + 'SaveVisit',this.IVisits);
  }
  UpdateVisit() {
    return this.http.put<IVisits>(this.localUrl + 'UpdateVisit',this.IVisits);
  }
  DeleteVisit(id: number) {
    return this.http.delete<boolean>(this.localUrl + 'DeleteVisit/'+id);
  }
  GetSalesVisits(id: number) {
    return this.http.get<IVisitView[]>(this.localUrl + 'GetSalesVisits/'+id);
  }
}
