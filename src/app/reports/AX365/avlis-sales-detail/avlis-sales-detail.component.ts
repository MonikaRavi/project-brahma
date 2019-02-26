import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { FadeInTop } from "../../../shared/animations/fade-in-top.decorator";

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'
import { AvlisCustomerSoService } from 'app/shared/data/AX365/avlis-customer-so.service';


FadeInTop()

@Component({
  selector: 'app-avlis-sales-detail',
  templateUrl: './avlis-sales-detail.component.html',
  styleUrls: ['./avlis-sales-detail.component.css'],
  animations: [
    trigger('changePane', [
      state('out', style({
        height: 0,
      })),
      state('in', style({
        height: '*',
      })),
      transition('out => in', animate('250ms ease-out')),
      transition('in => out', animate('250ms 300ms ease-in'))
    ])
  ]
})
export class AvlisSalesDetailComponent implements OnInit {

  customerData;

  salesID;

  isDataAvailable: boolean = false;

  isError: boolean = false;

  constructor(private route: ActivatedRoute, private customer: AvlisCustomerSoService) {

    this.salesID = this.route.snapshot.paramMap.get('SalesID');

    this.customer.getData(this.salesID).subscribe(

      (data) => {

        this.isError = false;

        this.customerData = data;
        //console.log(data);
        this.isDataAvailable = true

      },

      (err) => {

        console.log(err);

        this.isError = true;
      }
    );

  }

  ngOnInit() {
  }


  public steps = [
    {
      key: 'step1',
      title: 'Customer Information',
      valid: true,
      checked: true,
      submitted: true,
    },
    {
      key: 'step2',
      title: 'Sales Detail',
      valid: true,
      checked: true,
      submitted: true,
    }
  ];

  public activeStep = this.steps[0];

  setActiveStep(steo) {
    this.activeStep = steo
  }

  prevStep() {
    let idx = this.steps.indexOf(this.activeStep);
    if (idx > 0) {
      this.activeStep = this.steps[idx - 1]
    }
  }

  nextStep() {
    let idx = this.steps.indexOf(this.activeStep);
    if (idx < 1) {
      this.activeStep = this.steps[idx + 1]
    }
  }



}
