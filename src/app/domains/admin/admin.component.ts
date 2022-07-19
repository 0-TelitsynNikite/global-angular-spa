import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DealService} from "../../services/deal.service";

@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss'],
  providers: [DealService]
})
export class AdminComponent {
  myForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private deal: DealService
  ) {
    this.myForm = formBuilder.group({
      "dealType": ['', [Validators.required]],
      "dealTitle": ['', [Validators.required]],
      "dealPrice": ['', [Validators.required]],
      "personName": ['', [Validators.required]],
      "personEmail": ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit({value: {dealType, dealTitle, dealPrice, personName, personEmail}}: any) {
    switch (dealType) {
      case 'b2b':
        this.deal.addDeal('b2b', {dealType, dealTitle, dealPrice, personName, personEmail})
        break;
      case 'b2c':
        this.deal.addDeal('b2c', {dealType, dealTitle, dealPrice, personName, personEmail})
        break;
      case 'boxes':
        this.deal.addDeal('boxes', {dealType, dealTitle, dealPrice, personName, personEmail})
        break;
      case 'design':
        this.deal.addDeal('design', {dealType, dealTitle, dealPrice, personName, personEmail})
        break;
      case 'games':
        this.deal.addDeal('games', {dealType, dealTitle, dealPrice, personName, personEmail})
        break;
      case 'network':
        this.deal.addDeal('network', {dealType, dealTitle, dealPrice, personName, personEmail})
        break;
    }
    this.myForm.reset()
  }
}
