import { Injectable } from '@angular/core';

@Injectable()
export class SaveSalesService {

  constructor() { 

    this.salesID = '';

  }

  salesID ;

  setSalesID(salesOrder){

    this.salesID = salesOrder

  }

  getSalesID(){

    return this.salesID;

  }

}
