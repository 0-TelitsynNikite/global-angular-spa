import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ModalService} from "./services/modal.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isModal: boolean = false
  isSignedIn: any = false

  constructor(
    public translate: TranslateService,
    private modal: ModalService,
    private auth: AuthService
  ) {}

  onSignIn(value: any) {
    this.isSignedIn = value
  }

  onChangeLang(event: any) {
    this.translate.use(event.target.value)
  }

  changeModal() {
    this.modal.showModal()
    this.modal.isModal$.subscribe((val: any) => this.isModal = val)
  }

  logout() {
    this.auth.isLoggedIn$.subscribe((val: any) => this.isSignedIn = false)
    this.auth.logout()
  }
}
