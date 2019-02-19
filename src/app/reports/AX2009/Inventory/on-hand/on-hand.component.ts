import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FadeInTop } from "../../../../shared/animations/fade-in-top.decorator";
import { DataOnhandService } from 'app/shared/data/AX2009/Inventory/data-onhand.service';
import { InventoryListService } from 'app/shared/data/AX2009/Inventory/inventory-list.service';
import { ProductImageService } from 'app/shared/data/Cloudinary/product-image.service';
import { CheckCloudinaryService } from 'app/shared/data/AX2009/Inventory/check-cloudinary.service';

FadeInTop()

declare var $: any;

@Component({
  selector: 'app-on-hand',
  templateUrl: './on-hand.component.html',
  styleUrls: ['./on-hand.component.css']
})
export class OnHandComponent implements OnInit {

  ngOnInit() {


  }

  productID;
  productName;

  productImage = {
    slides: [

    ]
  }


  products: any;

  inventList;

  isDataAvailable: boolean = false;

  isListAvailable: boolean = false;

  isInitial: boolean = false;

  constructor(private onHandData: DataOnhandService, private inventListService: InventoryListService,
    private cloudImageService: ProductImageService, private checkCloudService: CheckCloudinaryService) {

    /*** Get Product List ***/

    this.inventListService.getData().subscribe(

      (data) => {

        this.inventList = data;

        this.isListAvailable = true;

      },

      (err) => {

        this.isListAvailable = false;
      }

    );




  }

  /** Get value selected And call OnHand **/

  getProductInfo() {

    let data = $("#symbolId").val();

    let name = $("#symbolId").find(":selected").text();;

    this.productID = data;

    this.productName = name;

    this.getOnHand(data);

  }

  /* On Hand */

  getOnHand(product) {

    this.checkImage(product); //Get Image

    this.onHandData.getData(product).subscribe( // Get On Hand

      (data) => {

        //if On Hand Data is present for STD config

        if (data.length !== 0) {


          this.products = data;

          console.log(this.products);

          this.isDataAvailable = true;


        } else {

          //if no std config data present

          this.isInitial = true;

          this.isDataAvailable = false;


        }


      },

      //if error while pulling data from sql

      (err) => {

        this.isDataAvailable = false;

        this.productImage.slides.push(

          { src: 'assets/img/products/Image-not-found.jpg' }
        );

        console.log(err);

      }

    )

  }

  //   onChange() {
  //     console.log("clicked");
  // }



  getImage(product) {

    this.cloudImageService.getImage(product).subscribe(

      (data) => {

        this.productImage.slides = [];

        if (typeof (data) !== 'undefined') {

          this.productImage.slides = data;

        } else {

          this.productImage.slides.push(

            { src: 'assets/img/products/Image-not-found.jpg' }
          )

        }

        //  console.log(this.productImage);
      },
      (err) => {

        console.log(err);
      }
    )
  }

  checkImage(product) {

    this.productImage.slides = [];

    this.checkCloudService.getData(product).subscribe(  

      (data) => {

        //if present

        if (data.length !== 0) {

          this.getImage(product);

        } else {

          //if absent

          this.productImage.slides.push(

            { src: 'assets/img/products/Image-not-found.jpg' }
          );

        }

      }, (err) => {

        //no image if error

        this.productImage.slides.push(

          { src: 'assets/img/products/Image-not-found.jpg' }
        );


        console.log(err);


      });

  }

  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }

}
