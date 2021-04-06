

import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/customer.service';
import { SalesService } from 'src/app/Service/sales.service';
import { VisitService } from 'src/app/Service/visit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  CustomerList: any;
  SalesList: any;
  VisitsList: any[] =[];
  SelectedSales:any=0;

  ViewNewVisit: boolean = false;
  ViewSales: boolean = false;
  UpdateVisit: boolean = false;
  ViewGrid: boolean = false;

  constructor(public CustomerServ: CustomerService, public SalesServ: SalesService, public VisitServ: VisitService) {
    this.CustomerServ.Get().subscribe(res => {
      this.CustomerList = res;
    });
    this.SalesServ.Get().subscribe(res => {
      this.SalesList = res;
    });



  }


  ngOnInit(): void {
    this.reset();
  }
 
  reset() {
    this.VisitServ.IVisits = {
      customerID: 0,
      salesID: 0,
      serial: 0,
      visitDate: new Date(),
      visitSummary: ""
    }
  }

  viewSales() {
    this.ViewSales = true;
    this.reset();
  }

  NewVisit() {
    this.ViewNewVisit = true;
    this.reset();
  }

  onSubmit() {
    if (this.VisitServ.IVisits.salesID != 0 && this.VisitServ.IVisits.customerID != 0 && this.VisitServ.IVisits.visitSummary != "") {
      this.VisitServ.SaveVisit().subscribe(res => {
        alert("Saved");
        this.ViewNewVisit = false;
      });
     
    }
    else {
      alert("Missing Data");
    }
  }

  onChangeSelectionSalesID(selected: any) {
    this.VisitServ.IVisits.salesID = parseInt(selected);
  }

  onChangeSelectionCustomerID(selected: any) {
    this.VisitServ.IVisits.customerID = parseInt(selected);
  }

  Cancel() {
    this.ViewNewVisit = false;
    this.ViewSales = false;
    this.UpdateVisit = false;
    this.ViewGrid = false;
    this.reset();
  }

  onChangeSelectionSelectSales(selected: any) {
    this.ViewGrid = true;
    this.VisitsList = [];
    this.SelectedSales=parseInt(selected);
    this.VisitServ.GetSalesVisits(parseInt(this.SelectedSales)).subscribe(res => {
      this.VisitsList = res;
    })
  }

  Update(serial:any) {
    this.UpdateVisit = true;
    this.VisitServ.IVisits=this.VisitsList.find(x=>x.serial==serial);
    
  }

  Delete(serial:any) {
    this.VisitServ.DeleteVisit(serial).subscribe(res=>{
      this.onChangeSelectionSelectSales(this.SelectedSales);
      alert("Deleted");
    });

  }

  onSubmitUpdate(){
    this.VisitServ.UpdateVisit().subscribe(res=>{
      this.onChangeSelectionSelectSales(res.salesID);
      alert("Updated");
      this.reset();
      this.UpdateVisit=false;
    });

  }


}

