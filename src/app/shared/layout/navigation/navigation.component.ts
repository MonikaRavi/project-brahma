import {Component, OnInit} from '@angular/core';
import { RoleService } from 'app/+user-role/role.service';




@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  customerActive : boolean = false;

  salesActive : boolean =  false;

  inventoryActive : boolean = false;

  operationsActive : boolean = false;

  projManagementActive : boolean = false;

  marketingActive : boolean = false;

  constructor(private userRole: RoleService) {

    this.customerActive = this.userRole.getCustomerServiceStatus();

    this.salesActive = this.userRole.getSalesStatus();

    this.inventoryActive = this.userRole.getInventoryStatus();

    this.operationsActive = this.userRole.getOperationStatus();

    this.projManagementActive = this.userRole.getProjManagementStatus();

    this.marketingActive = this.userRole.getMarketingStatus();

  }

  ngOnInit() {
  }

  
  

}
