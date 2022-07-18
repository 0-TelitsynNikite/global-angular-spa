import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss'],
  providers: []
})
export class AdminComponent {
  myForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      "dealType": ['', [Validators.required]],
      "dealTitle": ['', [Validators.required]],
      "dealPrice": ['', [Validators.required]],
      "personName": ['', [Validators.required]],
      "personEmail": ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(value: any) {
    console.log(value.value)
    this.myForm.reset()
  }
}
