import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../../shared/animations/fade-in-top.decorator";
import { DataOnhandService } from 'app/shared/data/AX2009/Inventory/data-onhand.service';

FadeInTop()

@Component({
  selector: 'app-on-hand',
  templateUrl: './on-hand.component.html',
  styleUrls: ['./on-hand.component.css']
})
export class OnHandComponent implements OnInit {

  productImage = {
    slides: [
      {
        src: 'assets/img/products/7501/7501.jpg',
      },
      {
        src: 'assets/img/products/7501/7501-Back.jpg'
      },
      {
        src: 'assets/img/products/7501/7501-Left.jpg'
      },
      {
        src : 'assets/img/products/7501/7501-Right.jpg'
      }
    ]
  }

  products : any;
 
  isDataAvailable : boolean = false;

  constructor(private onHandData : DataOnhandService) {


    this.onHandData.getData('7501').subscribe(

      (data)=>{

        if(data !== []) {

          this.products = data;
          
         // console.log(data);

          this.isDataAvailable = true;

        } else {

          this.isDataAvailable = false;


        }

        
      },

      (err)=>{

        this.isDataAvailable = false;

        console.log(err);

      }

    )

   }

  ngOnInit() {
  }

 

}
