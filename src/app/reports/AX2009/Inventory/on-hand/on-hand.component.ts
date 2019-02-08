import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FadeInTop} from "../../../../shared/animations/fade-in-top.decorator";
import { DataOnhandService } from 'app/shared/data/AX2009/Inventory/data-onhand.service';
import { InventoryListService } from 'app/shared/data/AX2009/Inventory/inventory-list.service';
import { ProductImageService } from 'app/shared/data/Cloudinary/product-image.service';

FadeInTop()

declare var $: any;

@Component({
  selector: 'app-on-hand',
  templateUrl: './on-hand.component.html',
  styleUrls: ['./on-hand.component.css']
})
export class OnHandComponent implements OnInit {



  ngOnInit(){
    

  }


  productImage = {
    slides: [
      
    ]
  }


  products : any;

  inventList ;
 
  isDataAvailable : boolean = false;

  isListAvailable : boolean = false;

  constructor(private onHandData : DataOnhandService, private inventListService : InventoryListService ,
              private cloudImageService : ProductImageService) {

    this.inventListService.getData().subscribe(

      (data)=>{

        this.inventList = data;

        this.isListAvailable = true;

      },

      (err)=>{

        this.isListAvailable = false;
      }

    );

  
      

   }


  getOnHand(product){

    this.cloudImageService.getImage('7501').subscribe(

      (data)=>{

            this.productImage.slides.push(
          {src : `${data}`}
        );

      //  console.log(this.productImage);
      },
      (err)=>{

        console.log(err);
      }
    )
    

    this.onHandData.getData(product).subscribe(

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

//   onChange() {
//     console.log("clicked");
// }

getProductInfo(){

let data = $("#symbolId").val();

this.getOnHand(data);

}

public onChange(event): void {  // event will give you full breif of action
  const newVal = event.target.value;
  console.log(newVal);
}

}
