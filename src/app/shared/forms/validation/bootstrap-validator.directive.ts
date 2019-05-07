import { Directive, Input, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';
import { CheckFormValidService } from 'app/applications/Quality/qaa/create-test/check-form-valid.service';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Directive({
  selector: '[saBootstrapValidator]'
})
export class BootstrapValidatorDirective implements OnInit {

  @Input() saBootstrapValidator: any;


  @HostListener('submit') s = () => {
    const bootstrapValidator = this.$form.data('bootstrapValidator');
    bootstrapValidator.validate();
    if (bootstrapValidator.isValid()) {
      let formName = this.$form.attr("id"); //Identify Form
      let formData = $('form').serializeArray(); //Get Form Data
      this.formVaildator.setFormData(formName, formData, this.route); // Call data processing service
      this.$form.submit();

    }
    else {
     
      return
    };
  }

  constructor(private el: ElementRef, private formVaildator: CheckFormValidService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    System.import('script-loader!smartadmin-plugins/bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js').then(() => {
      this.attach()
    })
  }

  private $form: any;


  private attach() {

    this.$form = $(this.el.nativeElement)
    this.$form.bootstrapValidator(this.saBootstrapValidator || {})

    this.$form.submit(function (ev) { ev.preventDefault(); });

  }

}
