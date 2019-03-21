import { Injectable } from '@angular/core';
import { UserRoleService } from 'app/shared/data/MySql/user-role.service';


@Injectable()
export class RoleService {

  isAdmin: boolean = false;

  isCustomerService: boolean = false;

  isSales: boolean = false;

  isOperations: boolean = false;

  isInventory: boolean = false;


  constructor(private userRole: UserRoleService) { }


  getUserRole(userEmail) {

    //returning promise to have the control wait for the role response

    return new Promise((resolve, reject) => {

      this.userRole.getData(userEmail).subscribe(

        (userData) => {

          if (userData !== []) {

            let userRoleArray: any;

            userRoleArray = userData;

            //console.log(userRoleArray);

            //Admin

            if (userRoleArray.indexOf("Admin") !== -1) {

              this.isAdmin = true;



            } else {

              //CS

              if (userRoleArray.indexOf("CS") !== -1) {

                this.isCustomerService = true;

              }

              //Sales
              if (userRoleArray.indexOf("Sales") !== -1) {

                this.isSales = true;

              }

              //Operations

              if (userRoleArray.indexOf("Operations") !== -1) {

                this.isOperations = true;

              }

              //Inventory

              if (userRoleArray.indexOf("Inventory") !== -1) {

                this.isInventory = true;

              }



            }

          }

          resolve(true);
        },

        (err) => {

          reject(true);
          console.log(err);
        }

      );

    })

  }






  getAdminStatus() {

    return this.isAdmin;

  }

  getCustomerServiceStatus() {

    return this.isCustomerService || this.isAdmin;

  }

  getSalesStatus() {

    // console.log(`SalesStatus ${this.isSales}`);

    return this.isSales || this.isAdmin;

  }

  getOperationStatus() {

    //  console.log(`OperationStatus ${this.isOperations}`);

    return this.isOperations || this.isAdmin;

  }

  getInventoryStatus() {

    return this.isInventory || this.isAdmin;

  }
}
