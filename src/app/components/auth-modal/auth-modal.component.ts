import {Component, EventEmitter, Output} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {MainTitleComponent} from "../main-title/main-title.component";
import {AuthService} from "../../services/auth.service";
import {ModalService} from "../../services/modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-modal',
  templateUrl: 'auth-modal.component.html',
  styleUrls: ['auth-modal.component.scss'],
  providers: [
    MainTitleComponent,
    AuthService
  ]
})
export class AuthModalComponent {
  @Output() onChanged = new EventEmitter()

  myForm: FormGroup
  isSignIn: boolean = false
  isModal: boolean = true

  constructor(
    private formBuilder: FormBuilder,
    private signIn: AuthService,
    private modal: ModalService,
    private router: Router
  ) {
    this.myForm = formBuilder.group({
      'userEmail': ['', [Validators.email, Validators.required]],
      'userPassword': ['', [Validators.required]]
    })
  }

  async onSignIn({value: {userEmail, userPassword}}: any) {
    await this.signIn.signIn(userEmail, userPassword)
    this.signIn.isLoggedIn$.subscribe((val: any) => this.isSignIn = val)
    this.myForm.reset()
    this.onChanged.emit(this.isSignIn)
  }

  changeToggle(event: any) {
    if (
      event.target.classList.contains('modal') ||
      event.target.classList.contains('sign-up-button') ||
      event.target.classList.contains('sign-in-button') ||
      event.target.classList.contains('button-close')
    ) {
      this.modal.hideModal()
      this.modal.isModal$.subscribe((val: any) => this.isModal = val)
    }
  }

  changeNav(event: any) {
    if (event.target.classList.contains('sign-up-button')) {
      this.router.navigate(['/signup'])
    }
  }
}
