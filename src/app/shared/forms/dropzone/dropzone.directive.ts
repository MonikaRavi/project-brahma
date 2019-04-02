import { Directive, Input, ElementRef } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

declare var $: any;

declare var Dropzone: any;

@Directive({
  selector: '[saDropzone]'
})
export class DropzoneDirective {

  @Input() saDropzone: any;

  private dropzone: any;

  constructor(private el: ElementRef) {
    System.import('dropzone').then((Dropzone) => {
      this.initDropzone(Dropzone)
      console.log(Dropzone)

    })
  }



  initDropzone(Dropzone) {
    Dropzone.autoDiscover = false;
    // Create the mock file:

    console.log('native element', this.el.nativeElement.form);
    console.log('sa dropzone', this.saDropzone)
    this.dropzone = new Dropzone(this.el.nativeElement, this.saDropzone || {});
  
  
  }

}
