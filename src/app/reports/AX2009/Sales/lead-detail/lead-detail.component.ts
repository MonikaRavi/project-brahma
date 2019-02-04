import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataCustomerSoService } from 'app/shared/data/AX2009/Sales/data-customer-so.service';

import {FadeInTop} from "../../../../shared/animations/fade-in-top.decorator";

import { trigger,
  state,
  style,
  transition,
  animate} from '@angular/animations'


FadeInTop()

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.css'],
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
export class LeadDetailComponent implements OnInit {

  customerData;

  salesID;

  isDataAvailable:boolean = false;

  constructor(private route:ActivatedRoute, private customer : DataCustomerSoService) {

    
    
   }

  ngOnInit() {
    
    this.salesID = this.route.snapshot.paramMap.get('salesID');

    this.customer.getData(this.salesID).subscribe(

      (data)=>{
        
        this.customerData = data;
        //console.log(data);
        this.isDataAvailable = true

      }, 

      (err)=> {

        console.log(err);
      }
    );

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
      title: 'Salesforce Quotation',
      valid: true,
      checked: true,
      submitted: true,
    },
    {
      key: 'step3',
      title: 'Sales Order in AX',
      valid: true,
      checked: true,
      submitted: true,
    },
    {
      key: 'step4',
      title: 'Freight View',
      valid: true,
      checked: true,
      submitted: true,
    },
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
    if (idx < 3) {
      this.activeStep = this.steps[idx + 1]
    }
  }




}
