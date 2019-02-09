import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FadeInTop } from "../../../../shared/animations/fade-in-top.decorator";
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

  imageList = [
    '1001',
    '1001HPSMS',
    '1001MS',
    '1011',
    '1011HPS',
    '1025',
    '1026G',
    '1047',
    '1105',
    '1107L',
    '119FR',
    '1900',
    '1920',
    '1920HPS',
    '1920W',
    '2000S',
    '2000SMS',
    '3600',
    '5010.6427SS',
    '7260B_7270B',
    '7360BTWC',
    '7361-7461',
    '7433FP',
    '7500',
    '7500EB',
    '7501',
    '7501TH',
    '7610',
    '7612',
    '7612LH',
    '7620',
    '7655WCC',
    '7656WCC',
    '8100',
    '8111FP',
    '8123',
    '8122',
    '8130',
    '8133H',
    '8163',
    '8300.158',
    '8300FP',
    '8317CTFP',
    '8355WCC',
    '8710',
    '8720',
    '8730',
    '8760',
    '8770',
    '8785',
    '8780',
    'H1001.8',
    'H1107.8'

  ];

  ngOnInit() {


  }


  productImage = {
    slides: [

    ]
  }


  products: any;

  inventList;

  isDataAvailable: boolean = false;

  isListAvailable: boolean = false;

  constructor(private onHandData: DataOnhandService, private inventListService: InventoryListService,
    private cloudImageService: ProductImageService) {



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


  getOnHand(product) {

    this.onHandData.getData(product).subscribe(

      (data) => {

        if (data.length !==0) {

          this.products = data;

          if(data[0].ImageFlag === 1){

              this.getImage(product);

          } else {

            this.productImage.slides = [];

            this.productImage.slides.push(

              { src: 'assets/img/products/Image-not-found.jpg' }
            );

          }

          // console.log(data);

          this.isDataAvailable = true;

        } else {

          this.isDataAvailable = false;


        }


      },

      (err) => {

        this.isDataAvailable = false;

        console.log(err);

      }

    )

  }

  //   onChange() {
  //     console.log("clicked");
  // }

  getProductInfo() {

    let data = $("#symbolId").val();

    this.getOnHand(data);

  }

  getImage(product){
    this.cloudImageService.getImage(product).subscribe(

      (data) => {

        this.productImage.slides = [];

          if (typeof (data) !== 'undefined') {
          
            this.productImage.slides.push(

              { src: `${data[0].url}` }

            );

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

  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }

}
