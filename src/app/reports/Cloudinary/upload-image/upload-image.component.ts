import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryListService } from 'app/shared/data/AX2009/Inventory/inventory-list.service';
import { FadeInTop } from 'app/shared/animations/fade-in-top.decorator';
import { DropzoneDirective } from 'app/shared/forms/dropzone';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImageUploadService } from 'app/shared/data/Cloudinary/product-image-upload.service';
import { NotificationService } from 'app/shared/utils/notification.service';

FadeInTop()

declare var $: any;

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})



export class UploadImageComponent implements OnInit {

  inventList: any;
  isListAvailable: boolean = false;
  isError: boolean = false;
  productID;

  disableInput: boolean = false;

  imageArray = [];

  uploadedImage: File = null;

  isImageAvailable : boolean = false;


  popMessages = [

    {
      title: "<i class='fa fa-cloud-upload txt-color-green'></i> <span class='txt-color-green'><strong> Success </strong></span>",
      content: "Image Uploaded to Cloudinary!",
      buttons: '[OK]'

    },

    {
      title: "<i class='fa fa-cloud-upload txt-color-red'></i> <span class='txt-color-red'><strong> Failed </strong></span>",
      content: "Image Upload to Cloudinary Failed!",
      buttons: '[OK]'

    },

    {
      title: "<i class='fa fa-remove txt-color-orangeDark'></i> <span class='txt-color-orangeDark'><strong> Removed </strong></span>",
      content: "Image removed!",
      buttons: '[OK]'

    }

  ]


  constructor(private inventListService: InventoryListService, private imageUpload: ProductImageUploadService,
    private notificationService: NotificationService) {

    /*** Get Product List ***/

    this.inventListService.getData().subscribe(

      (data) => {

        this.inventList = data;

        this.isListAvailable = true;

      },

      (err) => {

        this.isListAvailable = false;

        this.isError = true;
      }

    );

  }

  ngOnInit() {
  }



  /** Uplaod Image of selected product **/

  uploadImage() {

    let data = $("#symbolId").val();

    let name = $("#symbolId").find(":selected").text();;

    this.productID = data;

    this.imageUpload.uploadImage('example', this.imageArray).subscribe(
      (data) => {

        /*** Success Message */

        this.showPopup('success', this.popMessages[0]);
      },

      (err) => {

        /*** Error Message */

        this.showPopup('failed', this.popMessages[1]);

      }
    )

  }

  handleImageUpload(file: FileList) {

    console.log('file upload');

    this.isImageAvailable = true;

    for (let index = 0; index < file.length; index++) {

      this.uploadedImage = file.item(index);

      //image preview

      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageArray.push(event.target.result);
        
      }

      reader.readAsDataURL(this.uploadedImage);


    }

      console.log(this.imageArray);

  }

  resetUpload() {

    this.imageArray = [];

    this.isImageAvailable = false;

  }

  removeImage(index) {

    this.disableInput = true;

    this.imageArray.splice(index, 1);

    /** Image removed message  **/

    this.showPopup('removed', this.popMessages[2]);

    if(this.imageArray.length ===0) {

      this.isImageAvailable = false;

    }



  }

  showPopup(operation, template) {
    this.notificationService.smartMessageBox(template, (ButtonPressed) => {

      if (operation === 'success') {

        this.resetUpload();

      } else if (operation === 'removed') {

        this.disableInput = false;

      }



    });
  }

}
